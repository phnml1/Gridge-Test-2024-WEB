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
import Input from "./Input";
import { useAddFeed } from "../../hooks/useAddFeed";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../../firebase";
import { randomString } from "../../utils/utility";

const WriteModal = () => {
  const [, setWriteModal] = useRecoilState(writeModalState);
  const [contentUrls,setContentUrls] = useState<string[]>([]);
  const [step, setStep] = useState<string>("drag");
  const [feedText, setFeedText] = useState<string>('');
  const {addFeed,isSuccess} = useAddFeed();
  const [fileInfos,setFileInfos] = useState<{id:number,file:File}[]>([]);
const upload = async () => {
  const storage = getStorage(app);
  const storageRef = ref(storage,`images/${randomString(10)}`);

  fileInfos.map((item) => {
  uploadBytes(storageRef, item.file).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      setContentUrls(prev => [...prev,url])
  });
  });
})

   
}
  useEffect(()=>{
    if(contentUrls.length>=1){
      addFeed({feedText:feedText,contentUrls:contentUrls});  
    }
  },[contentUrls])
  useEffect(()=> {
    if(fileInfos.length===0) {
      setStep('drag');
    }
  },[fileInfos]);
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
          새 게시물 만들기{step === 'drag' && fileInfos.length > 0 && <Next onClick={()=>setStep('content')}>다음</Next>}
          {step === 'content'&& fileInfos.length > 0 && <Next onClick={()=>upload()}>공유</Next>}
        </ModalTitle>
        <ModalContentWrap step = {step}>
          <DragDrop fileInfos={fileInfos} setFileInfos={setFileInfos}/>
          {(step === 'content')&&(<Input setFeedText = {setFeedText}/>)}
        </ModalContentWrap>
      </Modal>
    </Wrap>
  );
};
export default WriteModal;
