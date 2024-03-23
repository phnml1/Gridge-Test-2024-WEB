import React from "react";
import {
  Wrap,
  CommentIcon,
  HeartComment,
  HeartIcon,
  Icons,
  BookMark,
  LikeWrap,
  DateWrap,
} from "./styles";
import heartIcon from "../../../assets/feed-heart.png";
import commentIcon from "../../../assets/message-circle.png";
import fillHeart from "../../../assets/filled-heart.png";
import bookmark from "../../../assets/bookmark.png";
import { timeForToday } from "../../../utils/utility";
import { useAddLike } from "../../../hooks/useAddLike";
import { useRecoilState } from "recoil";
import { modalState } from "../../../recoil/home";
interface ModalInfoProps {
  date: string;
  isLiked: boolean;
  isBookmarked: boolean;
}
const ModalInfo = (props: ModalInfoProps) => {
  const [modal] = useRecoilState(modalState);
  const { addLike } = useAddLike();
  return (
    <Wrap>
      <Icons>
        <HeartComment>
          {props.isLiked ? (
            <HeartIcon
              onClick={() => {
                addLike(modal);
              }}
              src={fillHeart}
            />
          ) : (
            <HeartIcon
              onClick={() => {
                addLike(modal);
              }}
              src={heartIcon}
            />
          )}{" "}
          <CommentIcon src={commentIcon} />
        </HeartComment>
        <BookMark src={bookmark} />
      </Icons>
      <LikeWrap>좋아요 1200개</LikeWrap>
      <DateWrap>{timeForToday(props.date)}</DateWrap>
    </Wrap>
  );
};
export default ModalInfo;
