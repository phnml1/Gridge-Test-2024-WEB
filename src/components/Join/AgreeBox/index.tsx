import React, { SetStateAction, useState } from "react";
import { Fragment } from "react";
import {
  AgreeBoxes,
  AllAgreeCheckBox,
  Guide,
  Title,
  JoinButtonWrap,
} from "./styles";
import { userInfo } from "../../../types/types";
import CheckBox from "./component/CheckBox";
import { JoinButton, GoBack } from "../styles";

interface AgreeBoxProps {
  userInfo: userInfo;
  setBoxTheme: React.Dispatch<SetStateAction<string>>;
  join: () => Promise<void>;
}
const AgreeBox = (props: AgreeBoxProps) => {
  const [agree, setAgree] = useState<boolean[]>([false, false, false]);
  const agreeMessages = [
    "이용약관 (필수)",
    "데이터 정책 (필수)",
    "위치 기반 기능 (필수)",
  ];
  function isAllAgree(): boolean {
    return !agree.includes(false);
  }

  return (
    <Fragment>
      <Title>이용약관에 동의</Title>
      <Guide>
        Tnovel은 회원님의 개인정보를 안전하게 보호합니다.
        <br />새 계정을 만드려면 모든 약관에 동의하세요.
      </Guide>
      <AllAgreeCheckBox>
        <CheckBox
          index={-1}
          check={isAllAgree()}
          setCheck={setAgree}
          content="이용약관 3개에 모두 동의"
        ></CheckBox>
      </AllAgreeCheckBox>
      <AgreeBoxes>
        {agree.map((a, i) => {
          return (
            <CheckBox
              index={i}
              check={a}
              setCheck={setAgree}
              content={agreeMessages[i]}
            ></CheckBox>
          );
        })}
      </AgreeBoxes>
      <JoinButtonWrap>
        {isAllAgree() ? (
          <JoinButton able={true} onClick={props.join}>
            가입
          </JoinButton>
        ) : (
          <JoinButton able={false}>가입</JoinButton>
        )}
        <GoBack onClick={() => props.setBoxTheme("birth")}>돌아가기</GoBack>
      </JoinButtonWrap>
    </Fragment>
  );
};
export default AgreeBox;
