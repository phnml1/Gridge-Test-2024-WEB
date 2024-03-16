import styled from "styled-components";
import { supportDeviceSize } from "../../components/styles";

export const HomeRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #F6F6F6;
  @media all and (max-width: ${supportDeviceSize}px) {
    width: 100vw;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 104px;
  justify-content: center;
  @media all and (max-width: ${supportDeviceSize}px) {
    align-items: center;
    padding: 0 40px;
  }
`;
export const FeedsWrap = styled.div`
  width: 520px;
  margin-top:30px;
  @media (min-width: 1001px) {
    margin-left:88px;
  }
  display: flex;
  flex-direction: column;
  @media all and (max-width: 520px) {
    width: 100%;
    align-items: center;
  }
`;

export const Side = styled.div`
  width:416px;
  background: white;
  height:100%;
  @media (max-width: 1000px) {
    display:none;
  }
`
