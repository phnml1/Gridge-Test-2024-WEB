import React, { useState } from "react";
import { ContentBackGround, ProFileName, ProFile, Wrap, More, Left, Right, Icons, ContentWrap, Indexes, Index, EmptyIndex, HeartComment, Icon, BookMark, Content, BoldContent, FeedContentSumContent, FeedText, FeedMoreButton, Comment, Time, CommentInputWrap } from "./styles"
import { FeedType } from "../../../../types/types";
import profile from '../../../../assets/mask-group.png'
import more from '../../../../assets/more.png';
import left from '../../../../assets/leftCircleButton.png';
import right from '../../../../assets/rightCircleButton.png';
import comment from '../../../../assets/message-circle.png';
import feedHeart from '../../../../assets/feed-heart.png';
import bookmark from '../../../../assets/bookmark.png';
import { truncateText } from "../../../../utils/utility";
import CommentInput from "../CommentInput";
interface FeedProps {
  feed:FeedType
}
const Feed = (props:FeedProps) => {
  const [index,setIndex] = useState<number>(0)
  const [moreText,setMoreText] = useState(false);
  return (<Wrap>
  <ContentBackGround index={index} background={props.feed.contentList[index].contentUrl}>
    {/*profile 이미지는 받아올 방법이없어서 기본이미지로대체 */}
    <ProFile src = {profile}></ProFile>
    <ProFileName>{props.feed.feedLoginId}</ProFileName>
    <More src={more}></More>
    {(index!==0) && (
    <Left src={left} onClick={()=>setIndex(index-1)}/>
    )
}
{(index!==props.feed.contentList.length-1) && (
    <Right src={right} onClick={()=>setIndex(index+1)}/>
)}
  </ContentBackGround>
  <ContentWrap>
    
    <Icons>
      <HeartComment>
      <Icon src = {feedHeart}></Icon>
      <Icon src={comment}></Icon>
      </HeartComment>
      <Indexes>
      {props.feed.contentList.map((_, i) => (
    index === i ? <Index key={i} /> : <EmptyIndex key={i} onClick={() => {setIndex(i)}}/>
  ))}

      </Indexes>
      <BookMark src={bookmark}>

      </BookMark>
    </Icons>
      <Content>
        <BoldContent>좋아요 104개{/*좋아요 받아오는거 없음 */}</BoldContent>
        <FeedText>
        <BoldContent>{props.feed.feedLoginId}</BoldContent>
        <FeedContentSumContent>{(moreText)?props.feed.feedText:truncateText(props.feed.feedText)}{!moreText && (<FeedMoreButton onClick={()=>{setMoreText(true)}}>더보기</FeedMoreButton>)}</FeedContentSumContent>

        </FeedText>
        <Comment>댓글 {props.feed.feedCommentCount}개 모두 보기</Comment>
        <Time>2시간전</Time>
      </Content>
      
  </ContentWrap>
  <CommentInputWrap>
  <CommentInput/>
      </CommentInputWrap>
  </Wrap>)
}
export default Feed;