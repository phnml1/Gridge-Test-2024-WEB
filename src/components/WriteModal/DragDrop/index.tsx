import { SetStateAction, useEffect, useState } from "react";
import {
  DropDown,
  DropDownButton,
  DropDownGuide,
  DropdownBackground,
  GuideText,
  PhotoIcon,
  PlusButton,
} from "./styles";
import React from "react";
import photoIcon from "../../../assets/photo-icon.png";
import ContentSwiper from "../../Swiper";
import { FeedContentListType } from "../../../types/types";
import plusButton from "../../../assets/plus-square.png";
import PlusMenu from "./PlusMenu";
interface DragEventWithDataTransfer extends React.DragEvent<HTMLDivElement> {
  dataTransfer: DataTransfer;
}
interface DragDropProps {
  setImageUrls: React.Dispatch<SetStateAction<FeedContentListType[]>>;
}
const DragDrop = (props: DragDropProps) => {
  const [active, setActive] = useState(false);
  const [plusMenu, setPlusMenu] = useState(false);
  const [fileInfo, setFileInfo] = useState<File | undefined>();
  const [imageUrls, setImageUrls] = useState<FeedContentListType[]>([]);
  const handleDragStart = () => setActive(false);
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    setActive(true);
    event.preventDefault(); // 필수 1
  };
  const handleDrop = (event: DragEventWithDataTransfer) => {
    event.preventDefault();
    setActive(false);
    const file = event.dataTransfer.files[0];
    setFileInfo(file);
  };
  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileInfo(file);
    }
  };
  useEffect(() => {
    if (fileInfo) {
      let fileReader = new FileReader();

      fileReader.onload = () => {
        const newImageUrlObject = {
          id: imageUrls.length + 1, // 이미지 배열의 길이 + 1을 사용하여 오름차순으로 id를 할당합니다.
          contentUrl: fileReader.result as string,
        };
        setImageUrls((prev) => [...prev, newImageUrlObject]);
        props.setImageUrls((prev) => [...prev, newImageUrlObject])
      };
      fileReader.readAsDataURL(fileInfo); // 파일을 읽어서 base64 형태로 변환합니다.
    }
  }, [fileInfo]);
  console.log(fileInfo);
  return (
    <DropDown
      active={active}
      onDragEnter={handleDragStart}
      onDragLeave={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <DropDownGuide>
        <PhotoIcon src={photoIcon} />
        <GuideText>사진과 동영상을 여기에 끌어다 놓으세요</GuideText>
        <label htmlFor="fileInput">
          <DropDownButton>컴퓨터에서 선택</DropDownButton>
        </label>
        {/* 파일 입력 필드, 화면에 보이지 않음 */}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          style={{ display: "none" }}
        />
      </DropDownGuide>
      {imageUrls.length > 0 && (
        <DropdownBackground>
          <ContentSwiper buttonpos={20} contents={imageUrls}></ContentSwiper>
          <PlusButton src={plusButton} onClick={()=>{setPlusMenu(!plusMenu)}}/>
          {plusMenu && (<PlusMenu setPlusMenu={setPlusMenu} setImageUrls = {setImageUrls} handleFileInputChange={handleFileInputChange} setFileInfo={setFileInfo} contents={imageUrls}></PlusMenu>)}
        </DropdownBackground>
      )}
    </DropDown>
  );
};
export default DragDrop;
