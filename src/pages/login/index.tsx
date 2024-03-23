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
  LoginBox,
  Or,
  ForgetPassword,
  JoinBox,
  JoinButton,
  AppGuideMessage,
  AppDownLoad,
  LoginDisable,
  LoginErrorWrap,
  LoginError,
} from "./styles";
import LogoImage from "../../assets/inobel-logo.png";
import LoginInput from "../../components/Input/login";
import mail from "../../assets/mail.png";
import lock from "../../assets/lock.png";
import playStore from "../../assets/play-store-button.png";
import appStore from "../../assets/app-store-button.png";
import { isCanLogin, isValidPassword } from "../../utils/utility";

import { useRecoilState } from "recoil";
import { jwtState, nameState } from "../../recoil/login";
import { useNavigate } from "react-router-dom";
import KakaoButton from "../../components/Buttons/KakaoButton";
import { requestNotJwt } from "../../apis/core";
import { JWT_KEY } from "../../config/constant";

const Login = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [canLogin, setCanLogin] = useState<boolean>(false);
  const [loginsuccess, setloginSuccess] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    setCanLogin(isCanLogin(id, password));
    setloginSuccess("");
  }, [id, password]);
  const [, setName] = useRecoilState(nameState);
  const [, setJwt] = useRecoilState(jwtState);

  // 로그인 버튼 클릭
  const handleLogin = async () => {
    try {
      if (id.length === 0) {
        alert("이름을 입력해 주세요.");
        return;
      }
      if (!isValidPassword(password)) {
        alert("비밀번호는 7자리 이상을 입력해야 합니다.");
      }

      const response = await requestNotJwt.post(`/auth/sign-in`, {
        loginId: `${id}`,
        password: `${password}`,
      });
      window.localStorage.setItem(JWT_KEY, response.data.result.jwt);
      window.localStorage.setItem("loginId", id);
      setJwt(response.data.result.jwt);
      setName(response.data.result.id);
      window.location.replace("/");
    } catch (error) {
      setloginSuccess("아이디나 비밀번호가 틀렸습니다.");
    }
  };
  const onKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    const key = event.key || event.keyCode;
    if (canLogin && (key === "Enter" || key === 13)) {
      handleLogin().then();
    }
  };

  return (
    <LoginRoot>
      <Wrap>
        <IphonesWrap></IphonesWrap>
        <LoginWrap>
          <LoginBox>
            <Logo src={LogoImage} alt="logo image" />
            <InputWrap>
              <LoginInput
                image={mail}
                placeholder="전화번호,사용자 이름 또는 이메일"
                type="text"
                value={id}
                setValue={setId}
              />
              <LoginInput
                image={lock}
                placeholder="비밀번호"
                type="password"
                value={password}
                setValue={setPassword}
                onKeyUp={onKeyUp}
              />
              {canLogin ? (
                <LoginButton onClick={handleLogin}>로그인</LoginButton>
              ) : (
                <LoginDisable>로그인</LoginDisable>
              )}
              <Or>or</Or>
              <KakaoButton />
              <LoginErrorWrap>
                {loginsuccess.length >= 1 && (
                  <LoginError>{loginsuccess}</LoginError>
                )}
                <ForgetPassword>비밀번호를 잊으셨나요?</ForgetPassword>
              </LoginErrorWrap>
            </InputWrap>
          </LoginBox>
          <JoinBox>
            계정이 없으신가요?
            <JoinButton
              onClick={() => {
                navigate("/sign-up");
              }}
            >
              가입하기
            </JoinButton>
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
