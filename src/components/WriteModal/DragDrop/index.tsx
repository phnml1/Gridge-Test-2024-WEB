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
import plusButton from "../../../assets/plus-square.png";
import PlusMenu from "./PlusMenu";
// import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// import { app } from "../../../firebase";
// import { randomString } from "../../../utils/utility";
import { FeedContentListType, FileInfo } from "../../../types/types";
import { MAX_SIZE } from "../../../config/constant";

interface DragEventWithDataTransfer extends React.DragEvent<HTMLDivElement> {
  dataTransfer: DataTransfer;
}
interface DragDropProps {
  fileInfos: FileInfo[];
  setFileInfos: React.Dispatch<SetStateAction<{ id: number; file: File }[]>>;
}
const DragDrop = (props: DragDropProps) => {
  const [active, setActive] = useState(false);
  const [plusMenu, setPlusMenu] = useState(false);
  const [id, setId] = useState(1);
  const [file, setFile] = useState<File | undefined>();
  const [imageUrls, setImageUrls] = useState<FeedContentListType[]>([]);
  const handleDragStart = () => setActive(false);
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    setActive(true);
    event.preventDefault();
  };
  const handleDrop = (event: DragEventWithDataTransfer) => {
    event.preventDefault();
    setActive(false);
    if (imageUrls.length < 5) {
      const file = event.dataTransfer.files[0];
      const type = file.type.split("/")[0];
      if (type === "image") {
        setFile(file);
        if (file.size <= MAX_SIZE) {
          props.setFileInfos((prev) => [...prev, { id: id, file: file }]);
        }
      } else {
        alert("이미지 파일만 올려주세요");
      }
    }
  };
  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const type = file.type.split("/")[0];
      if (type === "image") {
        setFile(file);
        if (imageUrls.length < 5 && file.size <= MAX_SIZE) {
          props.setFileInfos((prev) => [...prev, { id: id, file: file }]);
        }
      } else {
        alert("이미지 파일만 올려주세요");
      }
    }
  };
  useEffect(() => {
    if (file) {
      let fileReader = new FileReader();

      fileReader.onload = () => {
        const newImageUrlObject = {
          id: id,
          contentUrl: fileReader.result as string,
        };
        setImageUrls((prev) => [...prev, newImageUrlObject]);
      };
      fileReader.readAsDataURL(file);
      setId(id + 1);
    }
  }, [file]);

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
          <PlusButton
            src={plusButton}
            onClick={() => {
              setPlusMenu(!plusMenu);
            }}
          />
          {plusMenu && (
            <PlusMenu
              setPlusMenu={setPlusMenu}
              setImageUrls={setImageUrls}
              handleFileInputChange={handleFileInputChange}
              setFileInfo={props.setFileInfos}
              contents={imageUrls}
            ></PlusMenu>
          )}
        </DropdownBackground>
      )}
    </DropDown>
  );
};
export default DragDrop;
