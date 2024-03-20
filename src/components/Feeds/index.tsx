import React, { useEffect, useState } from "react";
import { Wrap } from "./styles";
import InfiniteScroll from "react-infinite-scroller";
import Feed from "./component/Feed";

import { FeedType } from "../../types/types";
import request from "../../apis/core";
import { useInfiniteQuery, useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { feedsState } from "../../recoil/home";
const Document = async (pageParam:number) => {
  return (await request.get('/feeds', { params: { size:10, page:pageParam } })).data
};
const getLastNumber = async () => {
  return (await request.get('/feeds', { params: { size:10, page:1 } })).data
};
const Feeds = () => {
  const [lastNumber, setLastNumber] = useState<number>(99999);
  const [,setFeedsState] = useRecoilState<FeedType[]>(feedsState);
  useQuery({
    queryKey: ["lastNumber"],
    queryFn: () => getLastNumber(),
    onSuccess: (data) => {
      setLastNumber(data?.result.lastPage);
    },
  });
  const { data:feeds, hasNextPage, fetchNextPage  } =
    useInfiniteQuery(
      ["feeds"],
      ({ pageParam = lastNumber}) => Document(pageParam),
      { 
        enabled: !!lastNumber && lastNumber !== 99999,
        getNextPageParam: (page,allPages) =>
        allPages.length !== page.result.lastPage
            ? page.result.lastPage-allPages.length+1
            : lastNumber,
            
          },
          
    );
    useEffect(()=>{
      const newarr:FeedType[] = []
      feeds?.pages.map((a) => {a.result.feedList.slice().reverse().map((data:FeedType) => newarr.push(data))})
      setFeedsState(newarr);
    },[feeds])

  return (
    <Wrap>
      {feeds && feeds.pages.length !== 0 ? (
        <InfiniteScroll
          className="w-3/4 flex flex-col items-center gap-6"
          style={{width:'100%',display:'flex',flexDirection:'column',gap:'20px'}}
          loadMore={() => {
            if(!!lastNumber && typeof lastNumber !== 'undefined' ) {
            fetchNextPage();
            }
          }}
          hasMore={hasNextPage}
        >
          {feeds.pages.map((pageData: any) =>
            pageData.result.feedList.slice().reverse().map((feeds: FeedType) => (
              <Feed key={feeds.id} feed={feeds} />
            ))
          )}
        </InfiniteScroll>
      ) : (
        <div>기록이 없습니다.</div>
      )}
    </Wrap>
  );
};
export default Feeds;
