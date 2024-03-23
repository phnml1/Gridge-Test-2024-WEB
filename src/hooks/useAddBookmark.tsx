import { useMutation } from "react-query";
import request from "../apis/core";
import { queryClient } from "../react-query/queryClient";
const Feeds = async (feedId:number) => {
  return (await request.post(`/feeds/${feedId}/bookmarked`,{feedId:feedId} ));
};
export const useAddBookmark = () => {
  const { mutate:addBookmark,data, isSuccess, isError } = useMutation((feedId: number) => {
    const response = Feeds(feedId);
    return response;
  },{
    onSuccess() {
      queryClient.invalidateQueries(["feeds"], { refetchInactive: true }); // 이 key에 해당하는 쿼리가 무효화!
    },
  });
  return { addBookmark ,data, isSuccess, isError };
}