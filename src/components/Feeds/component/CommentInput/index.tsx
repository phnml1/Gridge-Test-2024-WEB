import React, { useEffect, useState } from "react";
import { Button, Input, ProFile, Wrap } from "./styles";
import maskIcon from '../../../../assets/mask-group.png'
import { useAddComment } from "../../../../hooks/useAddComment";
interface InputProps {
  id: number
}
const CommentInput = (props: InputProps) => {
  const [value, setValue] = useState<string>('');
  const { addComment, data, isSuccess } = useAddComment();

  const handleClick = () => {
    addComment({ feedId: props.id, commentText: value });
  };
  useEffect(()=>
  {
    if(isSuccess){
      setValue('');
    }
  },
  [data,isSuccess])

  return (
    <Wrap>
      <ProFile src={maskIcon}></ProFile>
      <Input placeholder="댓글 달기" onChange={(e) => setValue(e.target.value)} value={value} />
      {(value.length>0)? (<Button value={value} onClick={handleClick}>게시</Button>):(<Button value={value}>게시</Button>)}
    </Wrap>
  );
};

export default CommentInput;