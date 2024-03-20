import React from "react";
import { Wrap,Comment, ProFile, Content } from "./styles";
// import request from "../../../apis/core";
import maskIcon  from '../../../assets/mask-group.png';
import { CommentType } from "../../../types/types";
// import { useQuery } from "react-query";
import { useQuery } from "react-query";
import request from "../../../apis/core";

interface CommentsProps {
  count: number;
  id: number;
}
const getComment = async (id:number,count:number) => {
  const response = await request.get(`/feeds/${id}/comments`,{params:{
    size:count,
    page:1,
  }});
  return response.data.result.commentList
};
const Comments = (props:CommentsProps) =>{
  // const [info, setInfo] = useState<CommentType[]>();
  const { data:commentData } = useQuery(['comment', props.id,props.count], () => getComment(props.id,props.count),{enabled:props.count>0});
  console.log(commentData);
  console.log(props.count);
  return (<Wrap>
    {commentData?.map((a:CommentType) => (<Comment key={a.id}>
      <ProFile src={maskIcon}/>
      <Content>
        <b>{a.writeUserLoginId}</b>&nbsp;{a.commentText}
      </Content>
    </Comment>))}
  </Wrap>)
}
export default Comments;