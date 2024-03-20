import { useMutation } from "react-query";
import request from "../apis/core";
import { queryClient } from "../react-query/queryClient";
const Feeds = async (feedText:string,contentUrls:string[]) => {
  return (await request.post(`/feeds`,{feedText:feedText, contentUrls:contentUrls} ));
};
export const useAddFeed = () => {
  const { mutate:addFeed,data, isSuccess, isError } = useMutation((info:{feedText:string,contentUrls:string[]}) => {
    const response = Feeds(info.feedText,info.contentUrls);
    return response;
  },
  {
    onSuccess() {
      
      queryClient.invalidateQueries(['feeds'], { refetchInactive: true }); // 이 key에 해당하는 쿼리가 무효화!
    },
  });
  return { addFeed ,data, isSuccess, isError };
}