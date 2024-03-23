import styled from "styled-components";
import { TextSmMedium } from "../../styles";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

export const Comment = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
export const ProFile = styled.img`
  width: 35px;
  height: 35px;
  border-raidus: 100%;
`;
export const Content = styled.div`
  width: 100%;
  ${TextSmMedium};
  text-align: left;
`;
export const HeartComment = styled.div`
  display: flex;
  gap: 15px;
`;
