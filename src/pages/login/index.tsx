import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import {
  InputWrap,
  IphonesWrap,
  LoginButton,
  LoginRoot,
  LoginWrap,
  Logo,
  Wrap,
  KakaoButton,
  LoginBox,
  Or,
  ForgetPassword,
  JoinBox,
  JoinButton,
  AppGuideMessage,
  AppDownLoad,
  LoginDisable,
} from "./styles";
import LogoImage from "../../assets/inobel-logo.png";
import Input from "../../components/Input";
import mail from "../../assets/mail.png";
import lock from "../../assets/lock.png";
import kakaologo from "../../assets/kakaologo.png";
import playStore from "../../assets/play-store-button.png";
import appStore from "../../assets/app-store-button.png";
import { isCanLogin } from "../../utils/utility";

// import { useRecoilState } from "recoil";
// import { jwtState, nameState } from "../../recoil/login";
const Login = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [canLogin,setCanLogin] = useState<boolean>(false);
  useEffect(() => {
    setCanLogin(isCanLogin(id,password));
  },[id,password])
  // const navigate = useNavigate();
  // const [name, setName] = useRecoilState(nameState);
  // const [, setJwt] = useRecoilState(jwtState);

  


  return (
    <LoginRoot>
      <Wrap>
        <IphonesWrap></IphonesWrap>
        <LoginWrap>
          <LoginBox>
            <Logo src={LogoImage} alt="logo image" />
            <InputWrap>
              <Input
                image={mail}
                placeholder="전화번호,사용자 이름 또는 이메일"
                type="text"
                value={id}
                setValue={setId}
              />
              <Input
                image={lock}
                placeholder="비밀번호"
                type="password"
                value={password}
                setValue={setPassword}
              />
              {
                canLogin?(
              <LoginButton onClick={()=>{console.log('클릭')}}>로그인</LoginButton>
                ): (<LoginDisable>로그인</LoginDisable>)
              }
              <Or>or</Or>
              <KakaoButton>
                <img src={kakaologo} width={22} height={22} alt="카카오 버튼" />
                카카오 로그인
              </KakaoButton>
              <ForgetPassword>비밀번호를 잊으셨나요?</ForgetPassword>
            </InputWrap>
          </LoginBox>
          <JoinBox>
            계정이 없으신가요?
            <JoinButton>가입하기</JoinButton>
          </JoinBox>
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
        </LoginWrap>
      </Wrap>
    </LoginRoot>
  );
};

export default Login;
