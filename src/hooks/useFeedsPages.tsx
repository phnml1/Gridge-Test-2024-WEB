import {
  FetchNextPageOptions,
  InfiniteData,
  UseInfiniteQueryResult,
  useInfiniteQuery,
  useQuery,
} from "react-query";
import { request } from "../apis/core";
import { FeedType } from "../types/types";
// import { useRecoilState } from 'recoil';
// import { lastPageState } from '../recoil/home';
// import { useRecoilState } from 'recoil';
// import { feedsState } from '../recoil/home';
// for when we need functions for useMutation

interface Result {
  result: {
    feedList: FeedType[];
    totalCount: number;
    lastPage: number;
  };
}

export interface FeedsPagesData {
  data: InfiniteData<Result> | undefined;
  hasNextPage: boolean | undefined;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<UseInfiniteQueryResult>;
}

const Document = async (pageParam: number) => {
  return (
    await request.get("/feeds", { params: { size: 10, page: pageParam } })
  ).data;
};
const getLastNumber = async () => {
  return (await request.get("/feeds", { params: { size: 10, page: 1 } })).data;
};
export async function useFeedsPages() {
  const { data: lastPage } = useQuery({
    queryKey: ["lastNumber"],
    queryFn: () => getLastNumber(),
  });
  const lastNumber = lastPage?.data.result.lastPage;
  const {
    data: feeds,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ["feeds"],
    ({ pageParam = lastNumber }) => Document(pageParam),
    {
      getNextPageParam: (lastPage, allPages) =>
        allPages.length !== lastPage.result.lastPage
          ? lastNumber - 1
          : undefined,
      enabled: !!lastNumber,
    }
  );

  return { feeds, hasNextPage, isLoading, isFetchingNextPage, fetchNextPage };
}
