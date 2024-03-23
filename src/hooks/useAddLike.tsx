import { useMutation } from "react-query";
import request from "../apis/core";
import { queryClient } from "../react-query/queryClient";
const Feeds = async (feedId: number) => {
  return await request.post(`/feeds/${feedId}/liked`, { feedId: feedId });
};
export const useAddLike = () => {
  const {
    mutate: addLike,
    data,
    isSuccess,
    isError,
  } = useMutation(
    (feedId: number) => {
      const response = Feeds(feedId);
      console.log(response);
      return response;
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(["feeds"], { refetchInactive: true }); // 이 key에 해당하는 쿼리가 무효화!
      },
    }
  );
  return { addLike, data, isSuccess, isError };
};
