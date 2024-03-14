import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { userInfo } from "../../../types/types";
import cake from "../../../assets/cake.png";
import {
  AddBirth,
  BirthOptionsWrap,
  Cake,
  GoBack,
  Guide,
  NotOpenProfile,
  WhyInputBirth,
} from "./styles";
import BirthOptionBox from "./components/BirthOptionBox";
import { changeBirthtoNumber, days, isValidBirth, months, years } from "../../../utils/utility";
import { JoinButton } from "./styles";
interface JoinInputBoxProps {
  userInfo: userInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfo>>;
  setBoxTheme: React.Dispatch<React.SetStateAction<string>>;
}
const BirthInputBox = (props: JoinInputBoxProps) => {
  console.log(props.userInfo);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [valid, setValid] = useState(false);
  useEffect(() => {
    const birthDate = props.userInfo.birthDate
    const formattedDate = changeBirthtoNumber(birthDate)
    console.log(formattedDate);
    if(birthDate!==''){
      setYear(Number(formattedDate[0]));
      setMonth(Number(formattedDate[1]));
      setDay(Number(formattedDate[2]));
    }
  },[])
  useEffect(() => {
    console.log(year,month,day);
    if(isValidBirth(year,month,day)) {
      props.setUserInfo((prev) => ({...prev, birthDate:`${year}-${month}-${day}`}));
      setValid(true);
    }
    else {
    setValid(false);
    }
  },[year,month,day])

  return (
    <Fragment>
      <Cake src={cake} />
      <AddBirth>생일추가</AddBirth>
      <NotOpenProfile>공개 프로필에 포함되지 않습니다.</NotOpenProfile>
      <WhyInputBirth>왜 생일 정보를 입력해야 하나요?</WhyInputBirth>
      <BirthOptionsWrap>
        <BirthOptionBox
          value={day}
          setValue={setDay}
          cases={days}
          kind="day"
        ></BirthOptionBox>

        <BirthOptionBox
          value={month}
          setValue={setMonth}
          cases={months}
          kind="month"
        ></BirthOptionBox>
        <BirthOptionBox
          value={year}
          setValue={setYear}
          cases={years}
          kind="year"
        ></BirthOptionBox>
      </BirthOptionsWrap>
      {!valid && (<Guide>태어난 날짜를 입력해야합니다</Guide>)}
      {valid? (<JoinButton onClick={()=>{props.setBoxTheme('')}}  able={valid}>가입</JoinButton>):(<JoinButton able={valid}>가입</JoinButton>)}
      <GoBack onClick={()=>{props.setBoxTheme('join')}}>돌아가기</GoBack>
    </Fragment>
  );
};
export default BirthInputBox;
