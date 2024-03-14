import styled, { css } from "styled-components";
import { supportDeviceSize } from "../../components/styles";
import iphones from "../../assets/Iphones-background.png";
export const LoginRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 1024px;
  background: #f6f6f6;
  @media all and (max-width: ${supportDeviceSize}px) {
    width: 100vw;
  }
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
  height: auto;
  gap: 72px;
`;

export const IphonesWrap = styled.div`
  width: 520px;
  height: 780px;
  background-image: url(${iphones});
  background-size: 100%;
`;

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 416px;
  height: auto;
  gap: 10px;
`;
export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  border: 1px solid #cccccc;
  position: relative;
  background: #ffffff;
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

  display: flex;
  align-items: center;
  justify-content: center;
  background: #2e90fa;
`;

export const LoginDisable = styled.div`
  width: 320px;
  padding: 10px 0;
  border-radius: 30px;
  ${Font}
  font-weight:600;
  text-align: center;
  color: #ffffff;
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
  margin-top: 57px;
`;
export const Or = styled.div`
  width: 14px;
  height: 24px;
  ${Font}
  font-size:16px;
  color: #7f7f7f;
  display: flex;
  align-itmes: center;
`;
export const LoginErrorWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const LoginError = styled.div`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: #F04438;

`;
export const ForgetPassword = styled.div`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;

  height: 20px;
  color: #7f7f7f;
  cursor: pointer;
`;
export const JoinBox = styled.div`
  width: 100%;
  height: 86px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  ${Font}
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background: #ffffff;
  color: #7f7f7f;
  gap: 4px;
`;
export const JoinButton = styled.div`
  color: #2e90fa;
  cursor: pointer;
`;
export const AppGuideMessage = styled.div`
  //styleName: Text md/Medium;
  ${Font}
  font-weight: 500;
  text-align: center;
  margin-top: 10px;
  color: #7f7f7f;
  margin-left: 4.5px;
`;
export const AppDownLoad = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
