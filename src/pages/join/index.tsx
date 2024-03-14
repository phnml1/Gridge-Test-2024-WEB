import React, { useState } from "react";
import {
  JoinWrap,
  JoinBox,
  JoinRoot,
  LoginBox,
  LoginButton,
  AppGuideMessage,
  AppDownLoad,
} from "./styles";
import playStore from "../../assets/play-store-button.png";
import appStore from "../../assets/app-store-button.png";
import JoinInputBox from "../../components/Join/JoinInputBox";
import { userInfo } from "../../types/types";
import BirthInputBox from "../../components/Join/BirthInputBox";


const Join = () => {
  const[userInfo, setUserInfo] = useState<userInfo>({
    "loginId": "",
    "password": "",
    "realName": "",
    "phone": "",
    "birthDate": ""
  });
  const [boxTheme,setBoxTheme] = useState<string>('join');
  return (
    <JoinRoot>
      <JoinWrap>
        <JoinBox>
          {(boxTheme==='join') && (<JoinInputBox userInfo = {userInfo} setUserInfo = {setUserInfo} setBoxTheme={setBoxTheme}/>)}
          {(boxTheme==='birth') && (<BirthInputBox userInfo = {userInfo} setUserInfo = {setUserInfo} setBoxTheme={setBoxTheme}/>)}
        </JoinBox>
        <LoginBox>
          계정이 있으신가요?
          <LoginButton>로그인</LoginButton>
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
