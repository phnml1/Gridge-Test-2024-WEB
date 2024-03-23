import { useMutation } from "react-query";
import request from "../apis/core";
import { queryClient } from "../react-query/queryClient";

const Feeds = async (id: number) => {
  return await request.patch(`/feeds/${id}/inactive`);
};

export const useDeleteFeed = () => {
  const { mutate: deleteFeed, isSuccess } = useMutation(
    (id: number) => {
      const response = Feeds(id);
      return response;
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(["feeds"], { refetchInactive: true });
      },
      onError() {
        alert("삭제에 실패했습니다.");
      },
    }
  );
  return { deleteFeed, isSuccess };
};
