import React, { useState } from "react";
import { Button, Input, Wrap } from "./styles";
import { useAddComment } from "../../../hooks/useAddComment";
// import { useRecoilState } from "recoil";
// import { modalState } from "../../../recoil/home";
// import { FeedType } from "../../../types/types";
interface InputProps {
  id: number;
}
const CommentInput = (props: InputProps) => {
  const [value, setValue] = useState("");
  const { addComment } = useAddComment();
  return (
    <Wrap>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="댓글 달기..."
      />{" "}
      {value.length > 0 ? (
        <Button
          value={value}
          onClick={() => addComment({ feedId: props.id, commentText: value })}
        >
          게시
        </Button>
      ) : (
        <Button value={value}>게시</Button>
      )}
    </Wrap>
  );
};
export default CommentInput;
