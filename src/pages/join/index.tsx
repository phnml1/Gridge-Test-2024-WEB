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


const Join = () => {
  const[userInfo, setUserInfo] = useState<userInfo>({
    "loginId": "",
    "password": "",
    "realName": "",
    "phone": "",
    "birthDate": ""
  });
  console.log(userInfo);
  return (
    <JoinRoot>
      <JoinWrap>
        <JoinBox>
          <JoinInputBox setUserInfo = {setUserInfo}/>
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
