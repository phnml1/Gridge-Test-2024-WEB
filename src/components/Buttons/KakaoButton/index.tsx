import React from "react";
import { KakaoButtonWrap } from "./styles";
import kakaologo from "../../../assets/kakaologo.png";

const KakaoButton = () => {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <KakaoButtonWrap onClick={handleKakaoLogin}>
      <img src={kakaologo} width={22} height={22} alt="카카오 버튼" />
      카카오 로그인
    </KakaoButtonWrap>
  );
};
export default KakaoButton;
