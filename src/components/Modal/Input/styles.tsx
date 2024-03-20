import styled from "styled-components";
import { TextSmBold, TextSmMedium } from "../../styles";

export const Wrap = styled.div`
  width: 100%;
  border-top: 0.5px solid #B2B2B2;
  padding: 15px;
  display:flex;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 8px;
`
export const Input = styled.input`
  width: calc(100% - 98px);
  padding:0;
  border:0;
  outline:0;
  ${TextSmMedium}
  text-align: left;
  color: #191919;


  &:placeholder {
    color: #7F7F7F;

  }
`;
export const Button = styled.div<{value:string}>`
  ${TextSmBold};
  width: 30px;
  color: #2E90FA;
  height: 20px;
  cursor:pointer;
  color:${(props) => ((props.value.length<1)?'#B2DDFF':'#2E90FA')};
`;
