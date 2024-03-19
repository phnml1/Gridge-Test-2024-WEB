import React, { useEffect, useState } from "react";
import { Wrap,Comment, ProFile, Content } from "./styles";
import request from "../../../apis/core";
import maskIcon  from '../../../assets/mask-group.png';
import { CommentType } from "../../../types/types";

interface CommentsProps {
  count: number;
  id: number;
}
const Comments = (props:CommentsProps) =>{
  const [info, setInfo] = useState<CommentType[]>();
  const getComment = async () => {
    const response = await request.get(`/feeds/${props.id}/comments`,{params:{
      size:props.count,
      page:1,
    }});
    setInfo(response.data.result.commentList)
  };
  useEffect(() => {
    if(props.count>0) {
    getComment();
    }
  },[props.id]);
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