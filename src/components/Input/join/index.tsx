import React, { useEffect, useState } from "react";
import { Wrap, InputImage, TextInput, InputWrap } from "../styles";
import { CheckBox, CheckBoxWrap, PassWordShowButton } from "./styles";
import checkCircle from "../../../assets/check-circle.png";
import xCircle from "../../../assets/x-circle.png";

interface LoginInputsProps {
  image: string;
  placeholder: string;
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  validate: (input: string) => string | boolean;
  isExistId?: boolean;
}

const JoinInput = (props: LoginInputsProps) => {
  // Input 에서 엔터키 누를 경우
  const [showPassword, setShowPassWord] = useState<Boolean>(
    props.type == "text" ? true : false
  );
  const [check, setCheck] = useState<Boolean | Promise<boolean>>(false);

  useEffect(() => {
    const result = props.validate(props.value);
    setCheck(!Boolean(result));
    if (typeof result === "boolean") {
      setCheck(result);
    }
    if (props.isExistId) {
      setCheck(false);
    }
  }, [props.value, props.isExistId]);

  return (
    <Wrap width="100%">
      <InputWrap>
        <InputImage src={props.image} />
        <TextInput
          type={showPassword ? "text" : "password"}
          maxLength={20}
          // onKeyUp={props.onKeyUp}
          onChange={(e) => {
            props.setValue(e.target.value);
          }}
          placeholder={props.placeholder}
          value={props.value}
        />
      </InputWrap>
      <CheckBoxWrap>
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
        {props.value.length >= 1 &&
          (check ? (
            <CheckBox src={checkCircle}></CheckBox>
          ) : (
            <CheckBox src={xCircle}></CheckBox>
          ))}
      </CheckBoxWrap>
    </Wrap>
  );
};

export default JoinInput;
