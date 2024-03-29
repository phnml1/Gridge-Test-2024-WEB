import React from "react";
import { Content, NickName, ProFile, Wrap, Text, ContentWrap, Date } from "./styles";
import maskGroup from "../../../../assets/mask-group.png";
interface CommentProps {
  id: string;
  text: string;
}
const Comment = (a: CommentProps) => {
  return (
    <Wrap>
      <ProFile src={maskGroup} />
      <ContentWrap>
        <Content>
          <NickName>{a.id}</NickName>&nbsp;<Text>{a.text}</Text>
        </Content>
        <Date></Date>
      </ContentWrap>
    </Wrap>
  );
};
export default Comment;
