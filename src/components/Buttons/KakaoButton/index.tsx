import React from "react";
import { KakaoButtonWrap } from "./styles";
import kakaologo from "../../../assets/kakaologo.png";
const KakaoButton = () => {
  return (
    <KakaoButtonWrap>
      <img src={kakaologo} width={22} height={22} alt="카카오 버튼" />
      카카오 로그인
    </KakaoButtonWrap>
  );
};
export default KakaoButton;
