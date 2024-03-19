import React from "react";
import {
  CommentWrap,
  Content,
  ContentAndComment,
  ContentProFileWrap,
  ContentWrap,
  Contents,
  ModalBackground,
  ModalContent,
  ModalWrap,
  More,
  OutSide,
  ProFile,
  ProFileImg,
  ProFileName,
  ProFileWrap,
  Time,
  Wrap,
} from "./styles";
import { useRecoilState } from "recoil";
import { modalState } from "../../recoil/home";
import maskIcon from '../../assets/mask-group.png';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ContentSwiper from "../Swiper";
import { FeedType } from "../../types/types";
import more from '../../assets/more-horizontal.png';
import { timeForToday } from "../../utils/utility";
import Comments from "./Comment";
import ModalInfo from "./ModalInfo";
import CommentInput from "./Input";
// import Input from "./Input";
const Modal = () => {
  const [modal, setModal] = useRecoilState<FeedType|null>(modalState);
  
  return (
    <Wrap>
      <OutSide
        onClick={() => {
          setModal(null);
        }}
      ></OutSide>
      {(modal !== null)&&(<ModalWrap>
        <ModalBackground>
            <ContentSwiper isModal={true} contents={modal.contentList} buttonpos={20} />
        </ModalBackground>
        <ModalContent>
          <ProFileWrap><ProFile><ProFileImg src={maskIcon}/><ProFileName>{modal.feedLoginId}</ProFileName></ProFile>
          <More src={more}/>
          </ProFileWrap>
          <ContentAndComment>
          <ContentWrap>
            <ContentProFileWrap>
              <ProFileImg src={maskIcon}/>
          </ContentProFileWrap>
          <Contents>
          <ProFileName>{modal.feedLoginId}</ProFileName>
          <Content>{modal.feedText}</Content>
          <Time>{timeForToday(modal.updatedAt)}</Time>
             
          </Contents>
          </ContentWrap>
          <CommentWrap><Comments id = {modal.id} count = {modal.feedCommentCount}/></CommentWrap>
          </ContentAndComment>
          <ModalInfo date = {modal.updatedAt}/>
          <CommentInput />
        </ModalContent>
             
      </ModalWrap>)}
    </Wrap>
  );
};
export default Modal;
