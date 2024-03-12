import React from "react";
import { Wrap, InputImage, TextInput, InputWrap } from "./styles";

interface InputProps {
  image: string;
  placeholder: string;
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onKeyUp?: (event: React.KeyboardEvent<HTMLElement>) => void;
}
const Input = (props: InputProps) => {
   // Input 에서 엔터키 누를 경우
   
  return (
    <Wrap width="100%">
      <InputWrap>
        <InputImage src={props.image} />
        <TextInput type = {props.type} maxLength={20} onKeyUp={props.onKeyUp} onChange = {(e)=>{props.setValue(e.target.value)}}placeholder={props.placeholder} />
      </InputWrap>
    </Wrap>
  );
};

export default Input;
