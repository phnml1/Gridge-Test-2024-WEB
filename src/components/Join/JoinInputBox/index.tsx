import { Fragment, useEffect, useState } from "react"
import { ErrorMessage, InputWrap, JoinButtonWrap, Logo, Or, ShareImage } from "./styles"
import KakaoButton from "../../Buttons/KakaoButton"
import JoinInput from "../../Input/join";
import LogoImage from "../../../assets/inobel-logo.png";
import mail from "../../../assets/mail.png";
import lock from "../../../assets/lock.png";
import user from "../../../assets/user.png";
import settings from "../../../assets/settings.png";
import {
  activateJoinButton,
  formatPhoneNumber,
  isValidId,
  isValidName,
  isValidPassword,
  isValidPhoneNumber,
} from "../../../utils/utility";
import { requestNotJwt } from "../../../apis/core";
import React from "react";
import { userInfo } from "../../../types/types";
import { JoinButton } from "../styles";
interface JoinInputBoxProps {
  userInfo: userInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfo>>;
  setBoxTheme: React.Dispatch<React.SetStateAction<string>>;
}
const JoinInputBox =  (props:JoinInputBoxProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [able, setAble] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [clicked,setClicked] = useState<boolean>(false);
  const [isExistId, setIsExistId] = useState<boolean>(false);
  const [,setValidate] = useState<boolean>(false);
  useEffect(() => {
    setId(props.userInfo.loginId);
    setPassword(props.userInfo.password);
    setName(props.userInfo.realName);
    setPhoneNumber(props.userInfo.phone);
  },[])
  useEffect(() => {
    setAble(activateJoinButton(phoneNumber, name, id, password));
    setClicked(false);
    setErrorMessage('');
    if(id.length>=1) {
    findExistId(id);
    }
  }, [phoneNumber, name, id, password]);
  const findExistId = async (id:string) => {
    
    const isduplicated = await requestNotJwt.get('/users',{
      params:{
        loginId:id
      }
    })
    const result:boolean = isduplicated.data.result.isExist
    setIsExistId(result);
  };
  useEffect(() => {
    if (!isValidPhoneNumber(phoneNumber)) {
      setErrorMessage('휴대폰 번호가 정확하지 않습니다. 국가번호를 포함하여 전체 전화번호를 입력해주세요.');
      setValidate(false);
    } 
    else if (!isValidId(id)) {
      setErrorMessage('사용자 이름에는 문자, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.');
      setValidate(false);
    }
    else if (isExistId) {
      setErrorMessage('사용할 수 없는 사용자 이름입니다. 다른 이름을 사용하세요.');
      setValidate(false);
    }
    else {
      setErrorMessage('');
      props.setUserInfo(prevState => ({...prevState,loginId:id,password:password,realName:name,phone:formatPhoneNumber(phoneNumber),}))
      setValidate(true);
      props.setBoxTheme('birth');
    }
  },[clicked])
  return (
    <Fragment>
    <Logo src={LogoImage}></Logo>
          <ShareImage>친구들과 함께 여행 이야기를 공유하고 보세요.</ShareImage>
          <InputWrap>
            <KakaoButton />
            <Or>or</Or>
            <JoinInput
              image={mail}
              type="text"
              placeholder={"전화번호, 사용자 이름 또는 이메일"}
              value={phoneNumber}
              setValue={setPhoneNumber}
              validate={isValidPhoneNumber}
            />
            <JoinInput
              image={user}
              type="text"
              placeholder={"성명"}
              value={name}
              setValue={setName}
              validate={isValidName}
            />
            <JoinInput
              image={settings}
              type="text"
              placeholder={"사용자 이름"}
              value={id}
              setValue={setId}
              validate={isValidId}
              isExistId={isExistId}
            />
            <JoinInput
              image={lock}
              type="password"
              placeholder={"비밀번호"}
              value={password}
              setValue={setPassword}
              validate={isValidPassword}
            />
            <JoinButtonWrap>
              {(errorMessage!=='' && clicked)&&(<ErrorMessage>{errorMessage}</ErrorMessage>)}
              {able? (<JoinButton onClick = {() => {setClicked(true)}} able={able}>가입</JoinButton>):(<JoinButton able={able}>가입</JoinButton>)}
            </JoinButtonWrap>
          </InputWrap>
          </Fragment>
  );
}
export default JoinInputBox;