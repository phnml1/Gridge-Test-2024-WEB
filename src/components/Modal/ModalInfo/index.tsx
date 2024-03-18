import React from "react";
import { Wrap, CommentIcon, HeartComment, HeartIcon, Icons, BookMark, LikeWrap, DateWrap } from "./styles";
import heartIcon from '../../../assets/feed-heart.png';
import commentIcon from '../../../assets/message-circle.png';
import bookmark from '../../../assets/bookmark.png'
import { timeForToday } from "../../../utils/utility";
interface ModalInfoProps {
  date: string;
}
const ModalInfo = (props: ModalInfoProps) => {
  return (<Wrap>
    <Icons>
    <HeartComment><HeartIcon src = {heartIcon}/> <CommentIcon src = {commentIcon}/></HeartComment>
    <BookMark src={bookmark}/>
    </Icons>
    <LikeWrap>
      좋아요 1200개
    </LikeWrap>
    <DateWrap>{timeForToday(props.date)}</DateWrap>
   
  </Wrap>)
}
export default ModalInfo;