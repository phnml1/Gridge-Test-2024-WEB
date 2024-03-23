import React, { SetStateAction, useState } from "react";
import {
  InputWrap,
  ProFile,
  Wrap,
  Image,
  TextInput,
  Name,
  Length,
  MenuWrap,
  Menu,
  MenuImg,
  MapMenu,
  LastMenu,
} from "./styles";
import maskIcon from "../../../assets/mask-group.png";
import mapPin from "../../../assets/map-pin.png";
import down from "../../../assets/chevron-down.png";
import { ID_KEY } from "../../../config/constant";
interface InputProps {
  setFeedText: React.Dispatch<SetStateAction<string>>;
}
const Input = (props: InputProps) => {
  const id = localStorage.getItem(ID_KEY);
  const [textValue, setTextValue] = useState("");
  const maxLength = 2200;
  const handleSetValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
    props.setFeedText(e.target.value);
  };
  return (
    <Wrap>
      <InputWrap>
        <ProFile>
          <Image src={maskIcon} />
          <Name>{id}</Name>
        </ProFile>
        <TextInput
          placeholder="여기에 입력하세요"
          value={textValue}
          onChange={(e) => handleSetValue(e)}
          maxLength={maxLength}
        ></TextInput>
        <Length>
          {textValue.length}/{maxLength}
        </Length>
      </InputWrap>
      <MenuWrap>
        <MapMenu>
          위치 추가
          <MenuImg src={mapPin} />
        </MapMenu>
        <Menu>
          접근성 <MenuImg src={down} />
        </Menu>
        <LastMenu>
          고급 설정 <MenuImg src={down} />
        </LastMenu>
      </MenuWrap>
    </Wrap>
  );
};
export default Input;
