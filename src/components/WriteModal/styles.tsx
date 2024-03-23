import styled from "styled-components";
import { TextLgSemibold, TextXlSemiBold } from "../styles";

export const Wrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #00000066;

  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
  box-sizing: border-box;
`;
export const OutSide = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const Modal = styled.div<{ step: string }>`
  height: 100%;
  width: ${(props) =>
    props.step === "content" ? "100%" : "calc(100% - 374px)"};
  max-width: ${(props) => (props.step === "content" ? "1008px" : "656px")};
  background: #ffffff;
  border-radius: 10px;
  z-index: 3;
  overflow: hidden;
  position: relative;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    overflow: auto;
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
export const ModalTitle = styled.div`
  width: 100%;
  ${TextXlSemiBold}
  height: 60px;
  box-sizing: border-box;
  border-bottom: 0.5px solid #b2b2b2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background: #fff;
`;
export const Next = styled.div`
  position: absolute;
  top: 16px;
  right: 20px;
  ${TextLgSemibold};
  color: #2e90fa;
  cursor: pointer;
`;
export const ModalContentWrap = styled.div<{ step: string }>`
  width: 100%;
  display: flex;
  height: calc(100% - 60px);
  @media (max-width: 800px) {
    flex-direction: column;
    height: ${(props) =>
      props.step === "content" ? "calc(200% - 60px)" : "calc(100% - 60px)"};
    overflow: auto;
  }
`;
