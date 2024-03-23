import styled from "styled-components";
import { TextMdMedium, TextMdRegular } from "../../../../styles";

export const Wrap = styled.div<{ kind: string }>`
  box-sizing: border-box;
  width: ${(props) => (props.kind === "month" ? "98px" : "101px")};
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid #b2b2b2;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
`;
export const Value = styled.div`
  width: 45px;
  disply: flex;
  align-items: center;
  text-align: center;
  ${TextMdRegular};
  color: #7f7f7f;
`;

export const Arrow = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ArrowImg = styled.img`
  width: 10px;
  height: 5px;
`;
export const DropDown = styled.div`
  width: 98px;
  height: 533px;
  border: 1px solid #e5e5e5;
  position: absolute;
  z-index: 8;
  background: #ffffff;
  padding-top: 4px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px -2px #10182808;

  box-shadow: 0px 12px 16px -4px #10182814;
  overflow: auto;
`;

export const DropDownItem = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  gap: 8px;
  align-items: center;
  &:hover {
    background: #f6f6f6;
  }
`;
export const DropDownItemContent = styled.div`
  width: 70px;
  height: 24px;
  ${TextMdMedium};
  color: #101828;
  margin-left: 14px;
`;
export const DropDownCheck = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;

//화살표는 margin-left:2px or margin-right:-2px;
