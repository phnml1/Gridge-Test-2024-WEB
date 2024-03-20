import React, { useState } from "react";
import { Button, Input, ProFile, Wrap } from "./styles";
import maskIcon from '../../../../assets/mask-group.png'
import { useAddComment } from "../../../../hooks/useAddComment";
interface InputProps {
  id: number
}
const CommentInput = (props: InputProps) => {
  const [value, setValue] = useState<string>('');
  const { addComment } = useAddComment();

  const handleClick = () => {
    addComment({ feedId: props.id, commentText: value });
  };

  return (
    <Wrap>
      <ProFile src={maskIcon}></ProFile>
      <Input placeholder="댓글 달기" onChange={(e) => setValue(e.target.value)} value={value} />
      <Button value={value} onClick={handleClick}>게시</Button>
    </Wrap>
  );
};

export default CommentInput;