import React from "react";
// import { useNavigate } from "react-router-dom";
import { InputWrap,IphonesWrap, LoginButton, LoginRoot, LoginWrap, Logo, Wrap, KakaoButton, LoginBox, Or, ForgetPassword } from "./styles";
import LogoImage from '../../assets/inobel-logo.png'
import Input from '../../components/Input';
import mail from '../../assets/mail.png';
import lock from '../../assets/lock.png';
import kakaologo from '../../assets/kakaologo.png';
// import { useRecoilState } from "recoil";
// import { jwtState, nameState } from "../../recoil/login";
const Login = () => {
  // const navigate = useNavigate();
  // const [name, setName] = useRecoilState(nameState);
  // const [, setJwt] = useRecoilState(jwtState);

  // // Input 에서 엔터키 누를 경우
  // const onKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
  //   const key = event.key || event.keyCode;
  //   if (key === "Enter" || key === 13) {
  //     handleLogin().then();
  //   }
  // };

  // // 로그인 버튼 클릭
  // const handleLogin = async () => {
  //   try {
  //     if (Object.keys(name).length === 0) {
  //       alert("이름을 입력해 주세요.");
  //       return;
  //     }

  //     //서버통신 코드 작성

  //     setJwt("success login");

  //     navigate(`/`);
  //   } catch (error) {
  //     alert("네트워크 통신 실패. 잠시후 다시 시도해주세요.");
  //   }
  // };

  return (
    <LoginRoot>
      <Wrap>
        <IphonesWrap>

        </IphonesWrap>
        <LoginWrap>
          <LoginBox>
            <Logo src={LogoImage} alt="logo image"/>
            <InputWrap>
            <Input image={mail} placeholder="전화번호,사용자 이름 또는 이메일"/>
            <Input image = {lock} placeholder="비밀번호"/>
            <LoginButton>
              로그인
              </LoginButton>
              <Or>
                or
              </Or>
              <KakaoButton>
                <img src={kakaologo} width={22} height={22} alt="카카오 버튼"/>
                카카오 로그인
              </KakaoButton>
              <ForgetPassword>
              비밀번호를 잊으셨나요?
            </ForgetPassword>
            </InputWrap>
            
          </LoginBox>
        
        </LoginWrap>
      </Wrap>
    </LoginRoot>
  );
};

export default Login;
