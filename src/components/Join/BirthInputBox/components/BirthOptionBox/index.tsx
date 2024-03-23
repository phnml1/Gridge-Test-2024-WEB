import React, { SetStateAction, useState } from "react";
import {
  Arrow,
  ArrowImg,
  DropDown,
  DropDownCheck,
  DropDownItem,
  DropDownItemContent,
  Value,
  Wrap,
} from "./styles";
import ArrowDown from "../../../../../assets/arrowDown.png";
import check from "../../../../../assets/check.png";
interface BirthOptionBoxProps {
  kind: string;
  cases: number[];
  value: number;
  setValue: React.Dispatch<SetStateAction<number>>;
}
const BirthOptionBox = (props: BirthOptionBoxProps) => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  return (
    <Wrap
      kind={props.kind}
      onClick={() => {
        setDropDown((prev) => !prev);
      }}
    >
      <Value>{props.value === 0 ? "--" : props.value}</Value>
      <Arrow>
        <ArrowImg src={ArrowDown} />
      </Arrow>
      {dropDown && (
        <DropDown>
          {props.cases.map((a) => {
            return (
              <DropDownItem
                onClick={() => {
                  props.setValue(a);
                }}
              >
                <DropDownItemContent>{a}</DropDownItemContent>
                {props.value === a && (
                  <DropDownCheck src={check}></DropDownCheck>
                )}
              </DropDownItem>
            );
          })}
        </DropDown>
      )}
    </Wrap>
  );
};
export default BirthOptionBox;
