import React, { useEffect, useState } from "react";
import {
  Wrap,
  OutSide,
  Modal,
  ModalTitle,
  // ModalContent,
  ModalContentWrap,
  Next,
} from "./styles";
import { useRecoilState } from "recoil";
import { writeModalState } from "../../recoil/home";
import DragDrop from "./DragDrop";
import { FeedContentListType } from "../../types/types";
import Input from "./Input";
const WriteModal = () => {
  const [, setWriteModal] = useRecoilState(writeModalState);
  const [imageUrls, setImageUrls] = useState<FeedContentListType[]>([]);
  const [step, setStep] = useState<string>("drag");
  useEffect(()=> {
    if(imageUrls.length==0) {
      setStep('drag');
    }
  },[imageUrls])
  return (
    <Wrap>
      <OutSide onClick={() => setWriteModal(false)}></OutSide>
      <Modal step = {step}>
        <ModalTitle>
          새 게시물 만들기{imageUrls.length > 0 && <Next onClick={()=>setStep('content')}>다음</Next>}
          {step === 'content' && <Next onClick={()=>setStep('content')}>공유</Next>}
        </ModalTitle>
        <ModalContentWrap step = {step}>
          <DragDrop setImageUrls={setImageUrls} />
          {(step === 'content')&&(<Input />)}
        </ModalContentWrap>
      </Modal>
    </Wrap>
  );
};
export default WriteModal;
