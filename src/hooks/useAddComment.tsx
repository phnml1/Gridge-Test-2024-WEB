import { useMutation } from "react-query";
import request from "../apis/core";
import { queryClient } from "../react-query/queryClient";
const Feeds = async (feedId:number,commentText:string) => {
  return (await request.post(`/feeds/${feedId}/comment`,{feedId:feedId, commentText:commentText} ));
};
export const useAddComment = () => {
  const { mutate:addComment,data, isSuccess, isError } = useMutation((info:{feedId:number,commentText:string}) => {
    const response = Feeds(info.feedId,info.commentText);
    return response;
  },
  {
    onSuccess(_data,variables) {
      
      queryClient.invalidateQueries(['feeds'], { refetchInactive: true }); // 이 key에 해당하는 쿼리가 무효화!
      queryClient.invalidateQueries(['comment',variables.feedId], { refetchInactive: true }); // 이 key에 해당하는 쿼리가 무효화!
    },
  });
  return { addComment ,data, isSuccess, isError };
}