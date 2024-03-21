import { useQuery } from "react-query";
import request from "../apis/core";
import { ID_KEY } from "../config/constant";
import { ProfileData } from "../types/types";



const handle = async () => {
  const id = localStorage.getItem(ID_KEY);
  return (await request.get(`/users/${id}/profile`)).data.result;
};
export function useGetProFile() {
  const { data:profile, isError } = useQuery<ProfileData>(["myprofile"], handle, {
    staleTime: 300 * 1000,
  });
  return { profile, isError };
}
