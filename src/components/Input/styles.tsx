import styled from "styled-components";

export const Wrap = styled.div<{ width: string }>`
  border-radius: 30px;
  border: 1px solid #d0d5dd;
  height: calc(50px - 27.6px);
  width: calc(${(props) => (props.width ? props.width : "100%")} - 28px);
  padding: 13px 14px;
  margin:0;
`;
export const InputWrap = styled.div`
  height:24px;
  display: flex;
  gap: 8px;
  align-items: center;
  position: relative;
`
export const InputImage = styled.img`
  width: 20px;
  height: 20px;
`;
export const TextInput = styled.input`
  outline: none;
  border-width: 0px;
  width: calc(100% - 2px);
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #344054;
  z-index:2;
  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }
`;
export const PassWordShowButton = styled.div`
  height:24px;
  text-align: center;
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  color: #191919;
  right: 0;
  position: absolute;
  z-index:3;
  cursor:pointer;
`
