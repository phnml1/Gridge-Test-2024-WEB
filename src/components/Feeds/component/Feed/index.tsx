import React, { useEffect, useState } from "react";
import { ContentBackGround, ProFileName, ProFile, Wrap, More, Icons, ContentWrap, Indexes, Index, EmptyIndex, HeartComment, Icon, BookMark, Content, BoldContent, FeedContentSumContent, FeedText, FeedMoreButton, Time, CommentInputWrap, CommentButton, CommentWrap } from "./styles"
import { CommentType, FeedType } from "../../../../types/types";
import profile from '../../../../assets/mask-group.png'
import more from '../../../../assets/more.png';
import comment from '../../../../assets/message-circle.png';
import feedHeart from '../../../../assets/feed-heart.png';
import bookmark from '../../../../assets/bookmark.png';
import { timeForToday, truncateText } from "../../../../utils/utility";
import CommentInput from "../CommentInput";
import { useRecoilState } from "recoil";
import {modalState } from "../../../../recoil/home";
import ContentSwiper from "../../../Swiper";
import { useAddLike } from "../../../../hooks/useAddLike";
import fillHeart from '../../../../assets/filled-heart.png';
import fillBookmark from '../../../../assets/filled-bookmark.png';
import { useQuery } from "react-query";
import request from "../../../../apis/core";
import Comment from "../Comment";
import { useAddBookmark } from "../../../../hooks/useAddBookmark";
interface FeedProps {
  feed:FeedType
}
const getComment = async (id:number,count:number) => {
  const response = await request.get(`/feeds/${id}/comments`,{params:{
    size:count,
    page:1,
  }});
  return response.data.result.commentList
};
const Feed = (props:FeedProps) => {
  const [index,setIndex] = useState<number>(0)
  const [moreText,setMoreText] = useState(false);
  const [,setModal] = useRecoilState<number>(modalState);
  const {addLike} = useAddLike();
  const {addBookmark} = useAddBookmark();
  const { data:commentData } = useQuery(['comment', props.feed.id,props.feed.feedCommentCount], () => getComment(props.feed.id,props.feed.feedCommentCount),{enabled:props.feed.feedCommentCount>0});
  useEffect(()=>{setMoreText(props.feed.feedText.length<=100)},[])
 return (<Wrap>
  <ContentBackGround>
    {/*profile 이미지는 받아올 방법이없어서 기본이미지로대체 */}
    <ProFile src = {profile}></ProFile>
    <ProFileName>{props.feed.feedLoginId}</ProFileName>
    <More onClick={() => {setModal(props.feed.id)}} src={more}></More>
   <ContentSwiper setIndex = {setIndex} buttonpos = {15} contents={props.feed.contentList}/>
  </ContentBackGround>
  <ContentWrap>
    
    <Icons>
      <HeartComment>
      {props.feed.isLiked?(<Icon src = {fillHeart} onClick={() => addLike(props.feed.id)}/>):(<Icon src = {feedHeart} onClick={() => addLike(props.feed.id)}></Icon>)}
      <Icon src={comment}></Icon>
      </HeartComment>
      <Indexes>
      {props.feed.contentList.map((_, i) => (
    index === i ? <Index key={i} /> : <EmptyIndex key={i} onClick={() => {setIndex(i)}}/>
  ))}

      </Indexes>
      {(props.feed.isBookMarked)?(<BookMark src={fillBookmark} onClick = {() => addBookmark(props.feed.id)}>

</BookMark>):(<BookMark src={bookmark} onClick = {() => addBookmark(props.feed.id)}>

      </BookMark>)}
    </Icons>
      <Content>
        <BoldContent>좋아요 104개{/*좋아요 받아오는거 없음 */}</BoldContent>
        <FeedText>
        <BoldContent>{props.feed.feedLoginId}</BoldContent>
        <FeedContentSumContent>{(moreText)?props.feed.feedText:truncateText(props.feed.feedText)}{!moreText && (<FeedMoreButton onClick={()=>{setMoreText(true)}}>더보기</FeedMoreButton>)}</FeedContentSumContent>
        
        </FeedText>
        <Time>{timeForToday(props.feed.updatedAt)}</Time>
        {(props.feed.feedCommentCount > 2)?(<CommentButton onClick={() => {setModal(props.feed.id)}}>댓글 {props.feed.feedCommentCount}개 모두 보기</CommentButton>): (
            <CommentWrap>{commentData?.map((a:CommentType) => (<Comment key={a.id} id = {a.writeUserLoginId} text = {a.commentText} />))}</CommentWrap>
        )}

      </Content>
      
  </ContentWrap>
  <CommentInputWrap>
  <CommentInput id = {props.feed.id}/>
      </CommentInputWrap>
  </Wrap>);
}
export default Feed;