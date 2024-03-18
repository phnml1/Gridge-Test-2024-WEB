import React from "react"
import { Button, Input, Wrap } from "./styles"

const CommentInput = () => {
  return (<Wrap><Input type="text" placeholder="댓글 달기..."/><Button>게시</Button></Wrap>)
}
export default CommentInput;