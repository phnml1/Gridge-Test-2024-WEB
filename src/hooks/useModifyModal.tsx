import { useMutation } from "react-query"
import request from "../apis/core"
import { queryClient } from "../react-query/queryClient"

const Feeds = async (id:number,feedText:string) => {
  console.log(feedText);
  return (await request.patch(`/feeds/${id}`,{
    feedText:feedText,
  }))
}

export const useModifyFeed = () => {
  const {mutate:modifyFeed, isSuccess}= useMutation((info: {id:number,feedText:string})=> {
    const response = Feeds(info.id,info.feedText);
    return response;
  },
  {
    onSuccess() {
      queryClient.invalidateQueries(['feeds'],{ refetchInactive: true });
    },
    onError() {
      alert('수정에 실패했습니다.');
    }
    
  }
  );
  return { modifyFeed, isSuccess };
}