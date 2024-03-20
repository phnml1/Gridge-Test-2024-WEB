import styled from "styled-components";
import { TextLgSemibold, TextSmMedium, TextSmRegular } from "../../styles";

export const Cake = styled.img`
  width:238px;
  height:170px;
  margin-top: 60px;
`
export const AddBirth = styled.div`
  ${TextLgSemibold}
  color: #191919;
  margin-top:20px;
`
export const NotOpenProfile = styled.div`
  ${TextSmMedium}
  color: #7F7F7F;
  margin-top: 16px;
`
export const WhyInputBirth = styled.div`
  ${TextSmMedium}
  color: #2E90FA;
  margin-top: 5px;
  cursor:pointer;

`


export const BirthOptionsWrap = styled.div`
  display:flex;
  gap:10px;
  margin-top:30px;
`;

export const Guide = styled.div`
  position:absolute;
  top: 423px;
  height:20px;
  left:122px;
  color:#7F7F7F;
  ${TextSmRegular}
`;
export const JoinButtonWrap = styled.div`
margin-top: 60px;
display: flex;
  align-items: center;
  flex-direction:column;
  margin-bottom:40px;
  gap:10px;
`
