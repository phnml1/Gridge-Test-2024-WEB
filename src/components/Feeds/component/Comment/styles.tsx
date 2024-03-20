import styled from "styled-components";
import { TextSmMedium, TextSmSemiBold, TextXsRegular } from "../../../styles";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
export const ProFile = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100%;
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap:3px;
`
export const Content = styled.div`
 
  color: #191919;
  display: flex;
  align-center: center;
  height:20px;
`;
export const NickName = styled.div`
${TextSmSemiBold};
display: flex;
  align-center: center;
`
export const Text = styled.div`
${TextSmMedium};
display: flex;
  align-center: center;
`;
export const Date = styled.div`
  ${TextXsRegular}
`