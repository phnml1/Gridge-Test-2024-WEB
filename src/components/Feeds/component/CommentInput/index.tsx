import React, { useState } from "react";
import { Button, Input, ProFile, Wrap } from "./styles";
import maskIcon from '../../../../assets/mask-group.png'
const CommentInput = () => {
  const [value,setValue] = useState<string>('')
  return (<Wrap>
    <ProFile src={maskIcon}></ProFile>
    <Input placeholder="댓글 달기" onChange={(e) => setValue(e.target.value)} value={value}/>
    <Button value={value}>게시</Button>
  </Wrap>)

}
export default CommentInput;