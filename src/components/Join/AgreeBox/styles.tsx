import styled from "styled-components";
import { TextLgSemibold } from "../../styles";

export const Title = styled.div`
  ${TextLgSemibold}
  margin-top:60px;
`;
export const Guide = styled.div`
font-family: SF Pro Display;
font-size: 14px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
margin-top: 15px;
height: 44px;
color: #7F7F7F;
`
export const AllAgreeCheckBox = styled.div`
box-sizing: border-box;  
width:356px;
  height: 50px;
  border-bottom:1px solid #CCCCCC;
  margin-top:19px;
  `;
export const AgreeBoxes = styled.div`
  margin-top:6px;
  display:flex;
  flex-direction: column;
  gap:10px;
  width:356px;
`;
export const JoinButtonWrap = styled.div`
margin-top: 34px;
display:flex;
align-items: center;
gap: 10px;
flex-direction: column;
margin-bottom: 40px;
`;