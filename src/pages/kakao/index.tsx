import React, { useEffect } from "react";

import { requestNotJwt } from "../../apis/core";
import { useNavigate } from "react-router-dom";
import { ID_KEY, JWT_KEY } from "../../config/constant";

const KakaoLogin = () => {
  const navigate = useNavigate();
  const AUTHORIZATION_CODE: string = new URL(
    document.location.toString()
  ).searchParams.get("code") as string;
  const handleKakaoLogin = async () => {
    await requestNotJwt
      .post(
        "/auth/kakao/sign-in-by-token",
        {
          accessToken: AUTHORIZATION_CODE,
        },
        {
          headers: {
            Authorization: `Bearer ${AUTHORIZATION_CODE}`,
          },
        }
      )
      .then((response) => {
        localStorage.setItem(JWT_KEY, response.data.result.jwt);
        localStorage.setItem(ID_KEY, response.data.result.id);
      })
      .catch((error) => {
        alert("연결된 계정이 없습니다.");
        navigate("/join/kakao", { state: { code: AUTHORIZATION_CODE } });
        console.log(error);
      });
  };
  useEffect(() => {
    handleKakaoLogin();
  }, []);
  return <div></div>;
};
export default KakaoLogin;
