import styled, { css } from "styled-components";
import { supportDeviceSize } from "../../components/styles";

export const Font = css`
  font-family: SF Pro Display;
  line-height: 24px;
  letter-spacing: 0em;
  font-size: 16px;
`;
export const JoinRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f6f6;
  @media all and (max-width: ${supportDeviceSize}px) {
    width: 100vw;
  }
`;
export const JoinWrap = styled.div`
  width: 446px;
  height: 910px;
  background: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
export const JoinBox = styled.div`
  width: 416px;
  height: auto;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Logo = styled.img`
  width: 217px;
  height: 80px;
  margin-top: 50px;
`;
export const ShareImage = styled.div`
  //styleName: Text md/Bold;
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #7f7f7f;
  margin-top: 10px;
`;
export const InputWrap = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
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

export const JoinButtonWrap = styled.div`
  width: 320px;
  margin-bottom: 40px;
`;
export const ErrorMessage = styled.div`
  width:100%;
  font-family: SF Pro Display;
font-size: 16px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0em;
text-align: center;
color: #F04438;

`;
export const JoinButton = styled.div<{ able: boolean }>`
  width: 100%;
  padding: 10px 0;
  border-radius: 30px;
  font-family: SF Pro Display;
  line-height: 24px;
  letter-spacing: 0em;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  ${(props) => (props.able ? "cursor: pointer;" : "")}
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.able ? "#2e90fa;" : "#B2DDFF")};
  margin-bottom: 39px;
`;
export const LoginBox = styled.div`
  width: calc(416px - 1.6px);
  height: calc(86px - 1.6px);
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
export const LoginButton = styled.div`
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
