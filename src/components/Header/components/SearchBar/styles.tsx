import styled from "styled-components";
import { TextMdRegular } from "../../../styles";

export const Wrap = styled.div`
  width: 312px;
  height: 44px;
  display:flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #B2B2B2;
  box-sizing: border-box;
padding: 10px 14px 10px 14px;
border-radius: 8px;
margin-bottom:1px;
@media (max-width: 520px) {
  display:none;
}
`;
export const InputWrap = styled.div`
width: 284px;
height: 24px;
display:flex;
gap: 8px;
align-items: center;
`;
export const SearchIcon = styled.img`
  width:20px;
  height:20px;

`;
export const Input = styled.input`
  ${TextMdRegular}
  width: 100%;
  padding:0;
  border:0;

`