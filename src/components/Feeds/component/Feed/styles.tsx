import styled from "styled-components";
import { TextMdSemibold, TextSmBold, TextSmMedium, TextXsMedium } from "../../../styles";

export const Wrap = styled.div`
  width:100%;
  box-sizing: border-box;
  height: auto;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
border-radius: 10px;
overflow: hidden;
`
export const ContentBackGround = styled.div`
  width: 100%;
  position: relative;
  @media(min-width:521px) {
    height: 520px;
  }
  @media (max-width: 520px) {
    padding-bottom: 100%;
  }
`;
export const ProFile = styled.img`
width: 35px;
height: 35px;
position: absolute;
top: 20px;
left: 15px;
border: 0.5px solid #FFFFFF;
box-sizing: border-box;
border-radius:100%;
z-index:3;
`;
export const ProFileName = styled.div`
position: absolute;
top: 26px;
left: 55px;
color: #FFFFFF;
${TextMdSemibold};
z-index:3;
`;

export const More = styled.img`
position: absolute;
top: 28px;
right: 17px;
width: 20px;
height:20px;
z-index:3;
`;
export const HeartComment = styled.div`
  display:flex;
  gap: 15px;
`
export const Left = styled.img`
position: absolute;
top: 50%;
transform: translateY(-50%);
left:15px;
width: 30px;
height:30px;
cursor:pointer;
`
export const Right = styled.img`
position: absolute;
top: 50%;
transform: translateY(-50%);
right: 15px;
width: 30px;
height:30px;
cursor:pointer;
`;
export const ContentWrap = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
`;
export const Content = styled.div`
width: 100%;
margin-top: 14px;
margin-left:1px;
display:flex;
flex-direction: column;
align-items: flex-start;
`
export const Icons = styled.div`
  margin-top:20px;
  display:flex;
  width: 100%;
  align-items: center;
  justify-content:space-between;
`;
export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
export const BookMark = styled.img`
  width: 24px;
  height: 24px;
  margin-top:1px;
`;
export const Indexes = styled.div`
  display:flex;
  gap: 2px;
  width: 40px;
  height: 5px;
  justify-content: center;
  margin-bottom: 1px;
  margin-right: 28.5px;
  `
export const Index = styled.div`
  border-radius: 100%;
  width: 5px;
  height: 5px;
  background: #2F80ED;

`
export const EmptyIndex = styled.div`
border-radius: 100%;
  width: 5px;
  height: 5px;
  background: #E0E0E0;
`
export const BoldContent = styled.div`
  ${TextSmBold}
  color: #191919;
  max-height:20px;
`
export const FeedText = styled.div`
  display:flex;
  gap: 5px;
  margin-top: 5px;
`
export const FeedMoreButton = styled.span`
${TextSmMedium}
color: #7F7F7F;
cursor:pointer;
`
export const FeedContentSumContent = styled.div`
  ${TextSmMedium}
  text-align: left;
`
export const Comment = styled.div`
${TextSmMedium}
  color: #999999;
  margin-top: 5px;
  cursor:pointer;
`;

export const Time = styled.div`
  ${TextXsMedium}
  color: #B2B2B2;
  margin-top:10px;
`;
export const CommentInputWrap = styled.div`
box-sizing: border-box;
  margin-top:20px;
  border-top: 0.5px solid #B2B2B2;
  height: 60px;
`