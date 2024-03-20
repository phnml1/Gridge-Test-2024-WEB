import styled from "styled-components";
import { TextLgMedium, TextLgSemibold, TextMdMedium, TextSmMedium } from "../../styles";

export const Wrap = styled.div`
  min-width: 374px;
  width:374px;
  height: 100%;
  
  @media (max-width: 800px) {
    width: 100%;
    order: 1;
  }
`;
export const InputWrap = styled.div`
  width: 100%;
  height: 300px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`
export const ProFile = styled.div`
  display: flex;
  gap: 11px;
`;
export const Image = styled.img`
  width: 35px;
  height: 35px;
`;
export const Name = styled.div`
  ${TextLgSemibold};
  color: #191919;

`;
export const TextInput = styled.textarea`
margin-top: 15px;
width: 100%;
height: 190px;
${TextLgMedium};
resize: none;
border: none;
outline: none;

`;

export const Length = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #B2B2B2;
  ${TextSmMedium}

`
export const MenuWrap = styled.div`
`;
export const MapMenu = styled.div`
  width: 100%;
  height: 50px;
  border-top: solid #B2B2B2;
  padding: 13px 13px 13px 20px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  ${TextMdMedium};
  color: #7F7F7F;

`;
export const Menu = styled.div`
width: 100%;
height: 50px;
border-top: solid #B2B2B2;
padding: 13px 13px 13px 20px;
display: flex;
justify-content: space-between;
box-sizing: border-box;
${TextMdMedium};
color: #7F7F7F;

`;
export const LastMenu = styled.div`
width: 100%;
height: 50px;
border-top: solid #B2B2B2;
border-bottom: solid #B2B2B2;
padding: 13px 13px 13px 20px;
display: flex;
justify-content: space-between;
box-sizing: border-box;
${TextMdMedium};
color: #7F7F7F;

`;
export const MenuImg = styled.img`
  width: 24px;
  height: 24px;
`