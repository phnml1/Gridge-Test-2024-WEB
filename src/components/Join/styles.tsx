import styled from "styled-components";
import { TextMdSemibold } from "../styles";

export const JoinButton = styled.div<{ able: boolean }>`
  width: 320px;
  padding: 10px 0;
  border-radius: 30px;
  font-family: SF Pro Display;
  line-height: 24px;
  letter-spacing: 0em;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  ${(props) => (props.able ? "cursor: pointer;" : "")}

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.able ? "#2e90fa;" : "#B2DDFF")};
`;

export const GoBack = styled.div`
  color: #2e90fa;
  ${TextMdSemibold};

  cursor: pointer;
`;
