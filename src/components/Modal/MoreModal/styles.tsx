import styled from "styled-components";
import { TextMdMedium, TextMdSemibold, TextSmMedium, TextSmSemiBold } from "../../styles";

export const Wrap = styled.div`
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background: #00000066;
  z-index:3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:50px;
  `;
export const Outside = styled.div`
position: absolute;
top:0;
left:0;
right:0;
bottom:0;
  z-index: 5;
`;
export const ModalWrap = styled.div`
  max-width: 448px;
  width: 100%;
  height: 100%;
  max-height: 450px;
  background: white;
  border-radius: 10px;
  box-sizing: border-box;
  z-index: 7;
`;

export const Item = styled.div`
  width: 100%;
  height: calc(100% / 9);
  border-top: 1px solid #CCCCCC;
  ${TextSmMedium};
  color: '#191919';
  justify-content: center;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  cursor:pointer;
`

export const ItemDelete = styled.div`
  width: 100%;
  height: calc(100% / 9);
  ${TextSmSemiBold};
  color: #F04438;
  justify-content: center;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  cursor:pointer;
`;
export const DeleteModalWrap = styled.div`
max-width: 448px;
  width: 100%;
  height: 223px;
  background: white;
  border-radius: 10px;
  box-sizing: border-box;
  z-index: 7;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export const Question = styled.div`
 ${TextMdSemibold}
 color: #191919;
 margin-top: 40px;
`;
export const ThisQuestion = styled.div`
  ${TextMdMedium};
  color: #7F7F7F;
  margin-top: 5px;
`
export const DeleteModalButtonWrap = styled.div`
  margin-top: 30px;
  width: 100%;
`;
export const DeleteModalItemDelete = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid #CCCCCC;
  ${TextSmSemiBold};
  color: #F04438;
  justify-content: center;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  cursor:pointer;
`;
export const DeleteModalItem = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid #CCCCCC;
  ${TextSmMedium};
  color: '#191919';
  justify-content: center;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  cursor:pointer;
`