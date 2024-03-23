import styled from "styled-components";
import { TextMdBold, TextMdRegular } from "../../styles";

export const Logo = styled.img`
  width: 217px;
  height: 80px;
  margin-top: 50px;
`;
export const ShareImage = styled.div`
  ${TextMdBold};
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
  ${TextMdRegular};
  font-size: 16px;
  color: #7f7f7f;
  display: flex;
  align-itmes: center;
`;

export const KaKaoJoinMessage = styled.div`
  width: 100%;
  height: 24px;
  font-family: SF Pro Display;
  font-size: 18px;
  font-weight: 700;
  color: #191919;
  display: flex;
  align-itmes: center;
  justify-content: center;
  margin-top: -15px;
`;

export const JoinButtonWrap = styled.div`
  width: 320px;
  margin-bottom: 39px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;
export const ErrorMessage = styled.div`
  width: 100%;
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: #f04438;
`;
