import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { userInfo } from "../../../types/types";
import cake from "../../../assets/cake.png";
import {
  AddBirth,
  BirthOptionsWrap,
  Cake,
  Guide,
  JoinButtonWrap,
  NotOpenProfile,
  WhyInputBirth,
} from "./styles";
import BirthOptionBox from "./components/BirthOptionBox";
import {
  addZeroIfNeeded,
  changeBirthtoNumber,
  days,
  isValidBirth,
  months,
  years,
} from "../../../utils/utility";
import { JoinButton, GoBack } from "../styles";
interface JoinInputBoxProps {
  userInfo: userInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfo>>;
  setBoxTheme: React.Dispatch<React.SetStateAction<string>>;
}
const BirthInputBox = (props: JoinInputBoxProps) => {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [valid, setValid] = useState(false);
  useEffect(() => {
    const birthDate = props.userInfo.birthDate;
    const formattedDate = changeBirthtoNumber(birthDate);

    if (birthDate !== "") {
      setYear(Number(formattedDate[0]));
      setMonth(Number(formattedDate[1]));
      setDay(Number(formattedDate[2]));
    }
  }, []);
  useEffect(() => {
    if (isValidBirth(year, month, day)) {
      props.setUserInfo((prev) => ({
        ...prev,
        birthDate: `${year}-${addZeroIfNeeded(month)}-${addZeroIfNeeded(day)}`,
      }));
      setValid(true);
    } else {
      setValid(false);
    }
  }, [year, month, day]);

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
      {!valid && <Guide>태어난 날짜를 입력해야합니다</Guide>}
      <JoinButtonWrap>
        {valid ? (
          <JoinButton
            onClick={() => {
              props.setBoxTheme("agree");
            }}
            able={valid}
          >
            가입
          </JoinButton>
        ) : (
          <JoinButton able={valid}>가입</JoinButton>
        )}
        <GoBack
          onClick={() => {
            props.setBoxTheme("join");
          }}
        >
          돌아가기
        </GoBack>
      </JoinButtonWrap>
    </Fragment>
  );
};
export default BirthInputBox;
