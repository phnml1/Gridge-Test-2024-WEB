import styled from "styled-components";

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
`
export const ModalWrap = styled.div`
  width:100%;
  background: #FFFFFF;
  height:100%;
  border-radius: 10px;
  max-width: 1072px;
  z-index:999;
  `;
export const ModalBackground = styled.div`
  max-width: 698px;
  height:100%;
  position:relative;
`
export const ModalContent = styled.div`
  width: 374px;
`
