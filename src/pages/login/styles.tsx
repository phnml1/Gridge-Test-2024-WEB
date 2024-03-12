import styled, { css } from "styled-components";
import { supportDeviceSize } from "../../components/styles";

export const LoginRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 1024px;
  background-color: #fff;

  // @media all and (max-width: ${supportDeviceSize}px) {
  //   width: 100vw;
  // }
`;

export const Font = css`
  font-family: SF Pro Display;
  line-height: 24px;
  letter-spacing: 0em;
  font-size: 16px;
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 780px;
  gap: 72px;
`;

export const IphonesWrap = styled.div`
  width: 520px;
  height: 100%;
`;

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 416px;
  height: 100%;
`;
export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 559px;
  border: 1px solid #cccccc;
  position: relative;
`;
export const LoginButton = styled.div`
  width: 320px;
  padding: 10px 0;
  border-radius: 30px;
  ${Font}
  font-weight:600;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  margin-top: 10px;
  background: #b2ddff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 217px;
  height: 80px;
  margin-top: 70px;
`;
export const InputWrap = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 207px;
`;
export const Or = styled.div`
width: 14px;
height: 24px;
${Font}
font-size:16px;
color: #7F7F7F;
display:flex;
align-itmes: center;
`;
export const KakaoButton = styled.button`
  width: 100%;
  border-radius: 30px;
  text-align: center;
  cursor: pointer;
  background: #f8d706;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  gap: 2px;
  ${Font}
  font-weight: 600;
`;
export const ForgetPassword = styled.div`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 20px;
  height:20px;
  color: #7f7f7f;
  margin-bottom: 40px;
  cursor:pointer;
`;
