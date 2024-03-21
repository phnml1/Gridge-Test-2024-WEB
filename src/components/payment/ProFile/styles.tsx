import styled from "styled-components";
import { DisplaySmMedium, TextMdBold, TextMdRegular, TextXsMedium } from "../../styles";

export const Wrap = styled.div`
  width: 100%;
  height: 1193px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ProFileWrap = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  height: auto;
  gap: 121px;
  align-items: center;
  justify-content: center;
`;
export const ProFileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`;
export const ProFileContent = styled.div`

`;
export const ProFileId = styled.div`
  ${DisplaySmMedium};
  color: #191919;
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;
export const ProfileButton = styled.div`
  border: 0.5px solid #B2B2B2;
  color: #191919;
  border-radius: 3px;
  height: 22px;
  box-sizing: border-box;
  margin-bottom: 3px;
  padding: 2px 5px 2px 5px;

  ${TextXsMedium};

`;
export const ProFileInfos = styled.div`
  display: flex;
  gap: 29px;
  margin-top: 20px;
`
export const ProFileInfo = styled.div`
  display: flex;
  gap: 3px;
`
export const ProFileInfoName = styled.div`
  ${TextMdRegular};
  color: #191919;
`;
export const ProFileInfoNumber = styled.div`
  ${TextMdBold};
`;
export const ProFileIntroduce = styled.div`
  margin-top: 15px;
  ${TextMdRegular};
  color: #191919;
`
export const ProFileIntroduceTheme =styled.div`
  color: #7F7F7F;

`