import styled from "styled-components";
import { DisplayXsMedium, TextMdSemibold } from "../../styles";

export const DropDown = styled.div<{active:boolean}>`
  width:100%;
  max-width: 656px;
  height:100%;
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.active?`background-color: #efeef3;
  border-color: #111;`:''}
  @media (max-width: 800px) {
    width: 100%;
      order: 2;
  }
`;
export const DropdownBackground = styled.div`
position:absolute;
top:0;
  width: 100%;
  height: 100%;
  z-index:2;
`
export const DropDownGuide = styled.div`
display: flex;
gap: 20px;
flex-direction: column;
align-items: center;
`;
export const DropDownButton = styled.div`
  width: 130px;
  height: 35px;
  color: #FFFFFF;
  ${TextMdSemibold};
  background: #2E90FA;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor:pointer;
`
export const PhotoIcon = styled.img`
  width: 71.25px;
  height: 71.25px;
`;
export const GuideText = styled.div`
  ${DisplayXsMedium};
  color: #7F7F7F;
`;
export const PlusButton = styled.img`
position:absolute; lkklk.8m 6
bottom:20px;
right: 20px;
bottom:20px;
  width: 35px;
  height: 35px;
  z-index: 3;
  cursor:pointer;
`