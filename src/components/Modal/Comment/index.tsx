import React, { useEffect, useState } from "react";
import { Wrap,Comment, ProFile, Content } from "./styles";
import { useRecoilState } from "recoil";
import { modalState } from "../../../recoil/home";
import request from "../../../apis/core";
import maskIcon  from '../../../assets/mask-group.png';
import { CommentType } from "../../../types/types";

interface CommentsProps {
  count: number;
}
const Comments = (props:CommentsProps) =>{
  const [modal] = useRecoilState(modalState);
  const [info, setInfo] = useState<CommentType[]>();
  const getComment = async () => {
    const response = await request.get(`/feeds/${modal}/comments`,{params:{
      size:props.count,
      page:1,
    }});
    setInfo(response.data.result.commentList)
  };
  useEffect(() => {
    getComment();
  },[modal]);
  return (<Wrap>
    {info?.map((a:CommentType) => (<Comment key={a.id}>
      <ProFile src={maskIcon}/>
      <Content>
        <b>{a.writeUserLoginId}</b>&nbsp;{a.commentText}
      </Content>
    </Comment>))}
  </Wrap>)
}
export default Comments;