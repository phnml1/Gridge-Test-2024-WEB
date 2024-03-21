import React, { useEffect } from "react"
import { ProfileWrap, ProfileImg, Wrap, ProfileContent, MyId, MyName, RecommandFriends, ShowAll, RecommandTitle, RecommandContents, RecommandContent, RecommandContentProFile, RecommandImg, FollowButton } from "./styles"
import maskicon from '../../../assets/mask-group.png';
// import request from "../../../apis/core";
// import { ID_KEY } from "../../../config/constant";
import { useGetProFile } from "../../../hooks/useGetProFile";
import { useNavigate } from "react-router-dom";
const Side = () => {
  // const [id] = useState(localStorage.getItem(ID_KEY));
  const {profile,isError} = useGetProFile();
  const navigate = useNavigate();
  useEffect(()=>{
  if(isError) {
    alert('다시로그인해주세요');
    navigate('/');
  }},[isError]);
  return (<Wrap>
    <ProfileWrap>
      <ProfileImg src = {maskicon}/>
      <ProfileContent>
        <MyId>{profile?.loginId}</MyId>
        <MyName>{profile?.realName}</MyName>
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