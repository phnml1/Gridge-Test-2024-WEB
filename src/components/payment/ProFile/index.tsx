import React from "react";
import {
  ProFileContent,
  ProFileId,
  ProFileImg,
  ProFileInfo,
  ProFileInfoName,
  ProFileInfoNumber,
  ProFileInfos,
  ProFileIntroduce,
  ProFileIntroduceTheme,
  ProFileWrap,
  ProfileButton,
} from "./styles";
import { useGetProFile } from "../../../hooks/useGetProFile";
import maskIcon from "../../../assets/mask-group.png";
const ProFile = () => {
  const { profile } = useGetProFile();
  console.log(profile);
  return (
    <ProFileWrap>
      <ProFileImg src={maskIcon} />
      <ProFileContent>
        <ProFileId>
          {profile?.loginId} <ProfileButton>프로필 편집</ProfileButton>
        </ProFileId>
        <ProFileInfos>
          <ProFileInfo>
            <ProFileInfoName>게시물</ProFileInfoName>
            <ProFileInfoNumber>{profile?.feedCount}</ProFileInfoNumber>
          </ProFileInfo>
          <ProFileInfo>
            <ProFileInfoName>팔로워</ProFileInfoName>
            <ProFileInfoNumber>{profile?.followerCount}</ProFileInfoNumber>
          </ProFileInfo>
          <ProFileInfo>
            <ProFileInfoName>팔로우</ProFileInfoName>
            <ProFileInfoNumber>{profile?.followingCount}</ProFileInfoNumber>
          </ProFileInfo>
        </ProFileInfos>
        <ProFileIntroduce>
          <div>{profile?.realName}</div>
          <ProFileIntroduceTheme>여행</ProFileIntroduceTheme>
          <div>
            여행 다니는거 좋아해요
            <br />
            세계를 돌아다닙니다
          </div>
        </ProFileIntroduce>
      </ProFileContent>
    </ProFileWrap>
  );
};
export default ProFile;
