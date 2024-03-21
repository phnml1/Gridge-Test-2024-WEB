import React, { useEffect, useState } from "react";
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
import { feedsState, modalState } from "../../recoil/home";
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
  const findIndex = (modal:number) => {
    return feeds.findIndex((feed) => feed.id === modal);
  }
  const [modal, setModal] = useRecoilState<number>(modalState);
  const [feeds] = useRecoilState<FeedType[]>(feedsState);
  const [index,setIndex] = useState<number>(findIndex(modal));
  console.log(feeds[index]);
  useEffect(() => {setIndex(findIndex(modal))},[feeds,index,modal]);
  useEffect(() => {
    if (modal!==-1) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  },[modal]);
  return (
    <Wrap>
      <OutSide
        onClick={() => {
          setModal(-1);
        }}
      ></OutSide>
      {(modal !== -1)&&(<ModalWrap>
        <ModalBackground>
            <ContentSwiper isModal={true} contents={feeds[index].contentList} buttonpos={20} />
        </ModalBackground>
        <ModalContent>
          <ProFileWrap><ProFile><ProFileImg src={maskIcon}/><ProFileName>{feeds[index].feedLoginId}</ProFileName></ProFile>
          <More src={more}/>
          </ProFileWrap>
          <ContentAndComment>
          <ContentWrap>
            <ContentProFileWrap>
              <ProFileImg src={maskIcon}/>
          </ContentProFileWrap>
          <Contents>
          <ProFileName>{feeds[index].feedLoginId}</ProFileName>
          <Content>{feeds[index].feedText}</Content>
          <Time>{timeForToday(feeds[index].updatedAt)}</Time>
             
          </Contents>
          </ContentWrap>
          <CommentWrap><Comments id = {feeds[index].id} count = {feeds[index].feedCommentCount}/></CommentWrap>
          </ContentAndComment>
          <ModalInfo date = {feeds[index].updatedAt}/>
          <CommentInput id = {feeds[index].id}/>
        </ModalContent>
             
      </ModalWrap>)}
    </Wrap>
  );
};
export default Modal;
