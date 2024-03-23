import styled from "styled-components";
import { TextMdSemibold, TextSmMedium, TextXsMedium } from "../styles";

export const Wrap = styled.div`
  position: fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background: #00000066;
  overflow: hidden;
  padding: 50px;
  display: flex;
  justify-content:center;
  align-items: center;
  z-index:998;
  box-sizing: border-box;
  `;
export const OutSide = styled.div`
  width:100%;
  height:100%;
  z-index:1;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
`;
export const ProFileWrap = styled.div`
  width: 100%;
  height: 65px;
  border-bottom: 0.5px solid #B2B2B2;
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
  box-sizing: border-box;
`;
export const ProFile = styled.div`
display: flex;
align-items: center;
gap:10px;
`
export const ProFileImg = styled.img`
  width:35px;
  height:35px;
  border-radius: 100%;
`;
export const ProFileName = styled.div`
  ${TextMdSemibold}
  color: #191919;

`
export const ModalWrap = styled.div`
  width:calc(100% - 30px);
  background: #FFFFFF;
  height:100%;
  border-radius: 10px;
  z-index:999;
  overflow:hidden;
  display:flex;
  justify-content:center;
  max-width:1072px;
  position: relative;
  @media (max-width:800px) {
    flex-direction: column;
    overflow-y: scroll;
    justify-content: flex-start;
  }
  &::after { 
    position: absolute;
    z-index: -1;
    height: calc(100% - 20px);
    top: 10px;
    right: -1px;
    width: 5px;
    background: #666;
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    display: block;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    border-right: none;
    border-left: none;
  }
  &::-webkit-scrollbar-track {
    height: 80%;
    background: transparent;
    background-clip: content-box;
  }
  &::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 10px; 
}

&::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 10px;
}
  `;

export const ContentWrap = styled.div`
  width:calc(100% -30px);
  padding: 0 15px;
  display:flex;
  gap: 10px;
`
export const ContentProFileWrap = styled.div`
  margin-top:15px;
`;
export const ContentAndComment = styled.div`
  width:100%;
  height: calc(100% - 227px);
  overflow: auto;
`
export const Contents = styled.div`
width:100%;
display:flex;
flex-direction: column;
align-items: flex-start;
margin-top: 18px;
`;

export const Content = styled.div`
  margin-top:8px;
  ${TextSmMedium}
  color: #191919;
  text-align: left;
`;
export const Time = styled.div`
  ${TextXsMedium};
  color: #B2B2B2;
`;

export const CommentWrap = styled.div`
  margin-top:30px;
  padding: 0 15px;
`

export const ModalBackground = styled.div`
width:calc(100% - 374px);
  max-width: 800px;
  height:100%;
  position:relative;
  @media (max-width: 800px) {
    width: 100%;
  }
`
export const ModalContent = styled.div`
  min-width: 374px;
  width:374px;
  @media (max-width: 800px) {
    width: 100%;
  }
`
export const More = styled.img`
  width:24px;
  height: 24px;
  cursor:pointer;
`;
export const ContentProFileName = styled.div`
  ${TextMdSemibold}
  color: #191919;

`;
