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
import { useAddFeed } from "../../hooks/useAddFeed";
const WriteModal = () => {
  const [, setWriteModal] = useRecoilState(writeModalState);
  const [imageUrls, setImageUrls] = useState<FeedContentListType[]>([]);
  const [step, setStep] = useState<string>("drag");
  const [feedText, setFeedText] = useState<string>('');
  const {addFeed,isSuccess} = useAddFeed()
const upload = async () => {
  const contentUrls = imageUrls.map(item => item.contentUrl);
  addFeed({feedText:feedText,contentUrls:contentUrls});    
}
console.log(imageUrls);
  useEffect(()=> {
    if(imageUrls.length==0) {
      setStep('drag');
    }
  },[imageUrls]);
  useEffect(()=>{
    if(isSuccess) {
      setWriteModal(false);
      }
  },[isSuccess])

  return (
    <Wrap>
      <OutSide onClick={() => setWriteModal(false)}></OutSide>
      <Modal step = {step}>
        <ModalTitle>
          새 게시물 만들기{step === 'drag' && imageUrls.length > 0 && <Next onClick={()=>setStep('content')}>다음</Next>}
          {step === 'content'&& imageUrls.length > 0 && <Next onClick={()=>upload()}>공유</Next>}
        </ModalTitle>
        <ModalContentWrap step = {step}>
          <DragDrop imageUrls = {imageUrls} setImageUrls={setImageUrls} />
          {(step === 'content')&&(<Input setFeedText = {setFeedText}/>)}
        </ModalContentWrap>
      </Modal>
    </Wrap>
  );
};
export default WriteModal;
