import React, { useState } from "react";
import {
  InputWrap,
  JoinWrap,
  JoinBox,
  JoinButton,
  JoinRoot,
  Logo,
  Or,
  ShareImage,
  LoginBox,
  LoginButton,
  AppGuideMessage,
  AppDownLoad,
} from "./styles";
import LogoImage from "../../assets/inobel-logo.png";
import KakaoButton from "../../components/Buttons/KakaoButton";
import JoinInput from "../../components/Input/join";
import mail from "../../assets/mail.png";
import lock from "../../assets/lock.png";
import user from "../../assets/user.png";
import settings from "../../assets/settings.png";
import playStore from "../../assets/play-store-button.png";
import appStore from "../../assets/app-store-button.png";
const Join = () => {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <JoinRoot>
      <JoinWrap>
        <JoinBox>
          <Logo src={LogoImage}></Logo>
          <ShareImage>친구들과 함께 여행 이야기를 공유하고 보세요.</ShareImage>
          <InputWrap>
            <KakaoButton />
            <Or>or</Or>
            <JoinInput
              image={mail}
              type="text"
              placeholder={"전화번호, 사용자 이름 또는 이메일"}
              value={id}
              setValue={setId}
            />
            <JoinInput
              image={user}
              type="text"
              placeholder={"성명"}
              value={name}
              setValue={setName}
            />
            <JoinInput
              image={settings}
              type="text"
              placeholder={"사용자 이름"}
              value={nickname}
              setValue={setNickname}
            />
            <JoinInput
              image={lock}
              type="password"
              placeholder={"비밀번호"}
              value={password}
              setValue={setPassword}
            />
            <JoinButton able={false}>가입</JoinButton>
          </InputWrap>
        </JoinBox>
        <LoginBox>
          계정이 없으신가요?
          <LoginButton>가입하기</LoginButton>
        </LoginBox>
        <AppGuideMessage>앱을 다운로드 하세요.</AppGuideMessage>
          <AppDownLoad>
            <img
              src={playStore}
              alt="플레이스토어 버튼"
              width={135}
              height={40}
            />
            <img src={appStore} alt="앱스토어 버튼" width={120} height={40} />
          </AppDownLoad>
      </JoinWrap>
    </JoinRoot>
  );
};
export default Join;
