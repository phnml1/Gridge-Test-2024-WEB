import React from "react";
import { Check, Content, More, Wrap, Text } from "./styles";
import check from '../../../../../assets/check-box.png';
import empty from '../../../../../assets/empty-box.png';
interface CheckBoxProps {
  index: number
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean[]>>;
  content: string;
  allAgree?: boolean;
}
const CheckBox = (props:CheckBoxProps) => {
  // 예시: 인덱스 1의 값을 true로 설정
  const handleCheck = () =>{
    props.setCheck((prev: boolean[]) => {
      const updatedArray = [...prev];
      updatedArray[props.index] = !updatedArray[props.index];
      return updatedArray;
    });
  }
  const handleAllCheck = () => {
    props.setCheck(prev => {
      // 이전 상태에서 모든 요소가 true이면 false로 변경
      if (prev.every(item => item === true)) {
        return prev.map(() => false);
      }
      // 이전 상태에서 하나 이상의 요소가 false이면 true로 변경
      else {
        return prev.map(() => true);
      }
    });
  };
  
  return (<Wrap>
    <Content><Text>{props.content}</Text>{(props.index!=-1) && (<More>더 알아보기</More>)}</Content>
    {(props.index!=-1)&&((props.check)?(<Check src = {check} onClick={handleCheck}></Check>):(<Check src={empty} onClick={handleCheck}></Check>))}
    {(props.index==-1)&&((props.check)?(<Check src = {check} onClick={handleAllCheck}></Check>):(<Check onClick={handleAllCheck} src={empty}></Check>))}
  </Wrap>);
}
export default CheckBox;