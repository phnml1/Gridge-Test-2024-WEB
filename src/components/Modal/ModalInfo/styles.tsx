import styled from "styled-components";
import { TextSmBold, TextXsMedium } from "../../styles";

export const Wrap = styled.div`
  width:100%;
  border-top: 0.5px solid #B2B2B2;
  padding: 15px 15px 20px 15px;
  box-sizing: border-box;
  height: 112px;
`
export const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;


export const HeartComment = styled.div`
display: flex;
gap: 15px;
`;

export const HeartIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor:pointer;
`;

export const CommentIcon = styled.img`
  width: 24px;
  height: 24px;
`
export const BookMark = styled.img`
  width: 24px;
  height: 24px;
  cursor:pointer;
`;
export const LikeWrap = styled.div`
  ${TextSmBold};
  color: #191919;
  margin-top: 10px;
`
export const DateWrap = styled.div`
  ${TextXsMedium}
  color: #B2B2B2;
  margin-top: 5px;
`