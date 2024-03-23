import styled, { css } from "styled-components";
import { TextMdMedium, TextMdSemibold, supportDeviceSize } from "../../components/styles";

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
  position: relative;
`;

export const LoginBox = styled.div`
  width: calc(416px - 1.6px);
  height: calc(86px - 1.6px);
  border: 1px solid #cccccc;
  ${TextMdSemibold}
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  color: #7f7f7f;
  gap: 4px;
`;
export const LoginButton = styled.div`
  color: #2e90fa;
  cursor: pointer;
`;
export const AppGuideMessage = styled.div`
  ${TextMdMedium};
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
