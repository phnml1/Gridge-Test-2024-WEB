import React from "react";
import { Wrap, InputImage, TextInput, InputWrap } from "./styles";

interface InputProps {
  image: string;
  placeholder: string;
}
const Input = (props: InputProps) => {
  return (
    <Wrap width="100%">
      <InputWrap>
        <InputImage src={props.image} />
        <TextInput placeholder={props.placeholder} />
      </InputWrap>
    </Wrap>
  );
};

export default Input;
