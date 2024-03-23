import styled from "styled-components";
import { TextSmBold, TextSmMedium } from "../../styles";

export const Wrap = styled.div`
  width: 100%;
  border-top: 0.5px solid #b2b2b2;
  padding: 15px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 8px;
`;
export const Input = styled.input`
  width: calc(100% - 98px);
  padding: 0;
  border: 0;
  outline: 0;
  ${TextSmMedium}
  text-align: left;
  color: #191919;

  &:placeholder {
    color: #7f7f7f;
  }
`;
export const Button = styled.div<{ value: string }>`
  ${TextSmBold};
  width: 30px;
  color: #2e90fa;
  height: 20px;
  ${(props) => (props.value.length < 1 ? "" : "cursor:pointer;")}
  color:${(props) => (props.value.length < 1 ? "#B2DDFF" : "#2E90FA")};
`;
