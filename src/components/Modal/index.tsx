import React from "react";
import { ModalBackground, ModalContent, ModalWrap, OutSide, Wrap } from "./styles";
import { useRecoilState } from "recoil";
import { feedsState, modalState } from "../../recoil/home";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ContentSwiper from "../Swiper";
import { FeedType } from "../../types/types";
const Modal = () => {
  const [feeds] = useRecoilState<FeedType[]>(feedsState);
  const [modal,setModal] = useRecoilState(modalState);


  return (<Wrap >
    <OutSide onClick={()=>{setModal(-1)}}></OutSide>
    <ModalWrap>
      <ModalBackground>
        <ContentSwiper contents={feeds[modal].contentList} buttonpos={20}/>
      </ModalBackground>
      <ModalContent>

      </ModalContent>
    </ModalWrap>
  </Wrap>)

}
export default Modal;
