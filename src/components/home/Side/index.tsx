import React from "react"
import { ProfileWrap, ProfileImg, Wrap, ProfileContent, MyId, MyName, RecommandFriends, ShowAll, RecommandTitle, RecommandContents, RecommandContent, RecommandContentProFile, RecommandImg, FollowButton } from "./styles"
import maskicon from '../../../assets/mask-group.png';
const Side = () => {

  return (<Wrap>
    <ProfileWrap>
      <ProfileImg src = {maskicon}/>
      <ProfileContent>
        <MyId>happypuppy</MyId>
        <MyName>블루</MyName>
      </ProfileContent>
      
    </ProfileWrap>
    <RecommandFriends>
        <RecommandTitle>
        회원님을 위한 추천 <ShowAll>모두 보기</ShowAll>
        </RecommandTitle>
        <RecommandContents>
          <RecommandContent>
            <RecommandContentProFile><RecommandImg src={maskicon}/>keeeeeeeeee</RecommandContentProFile>
            <FollowButton>팔로우</FollowButton>
          </RecommandContent>
          <RecommandContent>
            <RecommandContentProFile><RecommandImg src={maskicon}/>dewisandra</RecommandContentProFile>
            <FollowButton>팔로우</FollowButton>
          </RecommandContent>
          <RecommandContent>
            <RecommandContentProFile><RecommandImg src={maskicon}/>tiit_smail</RecommandContentProFile>
            <FollowButton>팔로우</FollowButton>
          </RecommandContent>
          <RecommandContent>
            <RecommandContentProFile><RecommandImg src={maskicon}/>window123</RecommandContentProFile>
            <FollowButton>팔로우</FollowButton>
          </RecommandContent>
        </RecommandContents>
      </RecommandFriends>
  </Wrap>)
}
export default Side;