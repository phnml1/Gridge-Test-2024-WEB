import React, { useEffect, useState } from "react"
import { ProfileWrap, ProfileImg, Wrap, ProfileContent, MyId, MyName, RecommandFriends, ShowAll, RecommandTitle, RecommandContents, RecommandContent, RecommandContentProFile, RecommandImg, FollowButton } from "./styles"
import maskicon from '../../../assets/mask-group.png';
import request from "../../../apis/core";
import { ID_KEY } from "../../../config/constant";
import { useRecoilState } from "recoil";
import { nameState } from "../../../recoil/login";
const Side = () => {
  const [id] = useState(localStorage.getItem(ID_KEY));
  const [profile,setProFile] = useState({id:'',name:''});
  const [,setName] = useRecoilState(nameState);
  const handle = async () => {
    const response = await request.get(`/users/${id}/profile`)
    setProFile((prev)=>({...prev,id:response.data.result.loginId,name:response.data.result.realName}));
  }
  useEffect(()=> {handle()},[id])
  useEffect(()=>{
    setName(profile.id);
  },[profile])
  return (<Wrap>
    <ProfileWrap>
      <ProfileImg src = {maskicon}/>
      <ProfileContent>
        <MyId>{profile.id}</MyId>
        <MyName>{profile.name}</MyName>
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