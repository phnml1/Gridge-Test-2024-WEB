import styled from "styled-components";
import { TextLgBold, TextMdMedium, TextSmBold, TextSmMedium, TextSmSemiBold } from "../../styles";

export const Wrap = styled.div`
  width:416px;
  @media (max-width: 1000px) {
    display:none;
  }`;


export const ProfileWrap = styled.div`
  display:flex;
  gap: 22px;
  margin-top:55px;
  `
export const ProfileContent = styled.div`
  display:flex;
  flex-direction: column;
  gap: 2px;
  background: #F2F2F2;
  border-radius: 100%;
`
export const ProfileImg = styled.img`
  width:80px;
  height: 80px;
  border
`
export const MyId = styled.div`
  ${TextLgBold}
  color: #191919;

`
export const MyName = styled.div`
  ${TextMdMedium};
  color: #7F7F7F;
`;
export const RecommandFriends = styled.div`
  width:100%;
  margin-top: 30px;
  
`
export const RecommandTitle = styled.div`
display: flex;
justify-content: space-between;
color: #7F7F7F;
${TextSmSemiBold}
`

export const ShowAll = styled.div`
color: #191919;

${TextSmBold}
`;
export const RecommandContents = styled.div`
  margin-top:15px;
  display: flex;
  flex-direction: column;
  gap:10px;

`;
export const RecommandContent = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
`;
export const RecommandContentProFile = styled.div`
display:flex;
  gap: 6px;
  ${TextSmMedium}
  color: #333333;
  align-items: center;
`;
export const RecommandImg = styled.img`
  width: 30px;
  height: 30px;
`
export const FollowButton = styled.div`
  cursor:pointer;
  color: #2E90FA;
  ${TextSmBold};
`