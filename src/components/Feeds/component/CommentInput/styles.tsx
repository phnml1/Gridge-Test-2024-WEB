import styled from "styled-components";
import { TextSmBold, TextSmMedium } from "../../../styles";

export const Wrap = styled.div`
  height:60px;
  padding: 0 15px;
  display:flex;
  gap:10px;
  align-items: center;
  justify-content: space-between;
`
export const ProFile = styled.img`
border-radius: 100%;
width:30px;
height: 30px;
`;
export const Input = styled.input`
  width: 100%;
  max-width:calc(100% - 93px);
  border:none;
  height: 20px;
  color: #191919;
  ${TextSmMedium}
  &:focus 
  {
    outline:none;
  }
  &:placeholder{
    color: #B2B2B2;
  }
  text-align: left;
`
export const Button = styled.div<{value:string}>`
  width: 28px;
  ${TextSmBold}
  cursor:pointer;
  
  color:${(props) => ((props.value.length<1)?'#B2DDFF':'#2E90FA')};
`
