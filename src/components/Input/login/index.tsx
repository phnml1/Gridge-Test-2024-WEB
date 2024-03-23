import React, { useState } from "react";
import {
  Wrap,
  InputImage,
  TextInput,
  InputWrap,
  PassWordShowButton,
} from "../styles";

interface LoginInputsProps {
  image: string;
  placeholder: string;
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onKeyUp?: (event: React.KeyboardEvent<HTMLElement>) => void;
}
const LoginInput = (props: LoginInputsProps) => {
  // Input 에서 엔터키 누를 경우
  const [showPassword, setShowPassWord] = useState<Boolean>(
    props.type == "text" ? true : false
  );
  return (
    <Wrap width="100%">
      <InputWrap>
        <InputImage src={props.image} />
        <TextInput
          type={showPassword ? "text" : "password"}
          maxLength={20}
          onKeyUp={props.onKeyUp}
          onChange={(e) => {
            props.setValue(e.target.value);
          }}
          placeholder={props.placeholder}
        />
        {props.type == "password" &&
          props.value.length >= 1 &&
          (showPassword ? (
            <PassWordShowButton
              onClick={() => {
                setShowPassWord(false);
              }}
            >
              숨기기
            </PassWordShowButton>
          ) : (
            <PassWordShowButton
              onClick={() => {
                setShowPassWord(true);
              }}
            >
              비밀번호 표시
            </PassWordShowButton>
          ))}
      </InputWrap>
    </Wrap>
  );
};

export default LoginInput;
