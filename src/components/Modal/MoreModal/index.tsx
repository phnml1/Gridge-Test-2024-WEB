import React, { useState, useEffect, SetStateAction } from "react";
import {
  DeleteModalButtonWrap,
  DeleteModalItem,
  DeleteModalItemDelete,
  DeleteModalWrap,
  Item,
  ItemDelete,
  ModalWrap,
  Outside,
  Question,
  ThisQuestion,
  Wrap,
} from "./styles";
import { useDeleteFeed } from "../../../hooks/useDeleteFeed";
import { useRecoilState } from "recoil";
import { modalState, modifyModalState } from "../../../recoil/home";
import { ID_KEY } from "../../../config/constant";

interface MoreModalProps {
  loginId: string;
  setMoreModal: React.Dispatch<SetStateAction<boolean>>;
}
const MoreModal = (props: MoreModalProps) => {
  const [modal, setModal] = useRecoilState<number>(modalState);
  const [, setModifyModal] = useRecoilState<number>(modifyModalState);
  const myId = localStorage.getItem(ID_KEY);
  const { deleteFeed, isSuccess } = useDeleteFeed();
  const [theme, setTheme] = useState("modal");
  const [deleteAllowed, setDeleteAllowed] = useState(false);
  useEffect(() => {
    if (isSuccess) {
      setModal(-1);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (deleteAllowed) {
      if (props.loginId === myId) {
        deleteFeed(modal);
      } else {
        alert("본인이 올린 게시글만 삭제가능합니다.");
        setDeleteAllowed(false);
      }
    }
  }, [deleteAllowed]);
  return (
    <Wrap>
      <Outside onClick={() => props.setMoreModal(false)}></Outside>
      {theme === "modal" && (
        <ModalWrap>
          <ItemDelete
            onClick={() => {
              setTheme("delete");
            }}
          >
            삭제
          </ItemDelete>
          <Item
            onClick={() => {
              if (props.loginId === myId) {
                setModifyModal(modal);
                setModal(-1);
              } else {
                alert("본인이 올린 게시글만 수정가능합니다.");
              }
            }}
          >
            수정
          </Item>
          <Item>좋아요 수 숨기기</Item>
          <Item>댓글 기능 해제</Item>
          <Item>게시물로 이동</Item>
          <Item>공유 대상...</Item>
          <Item>링크복사</Item>
          <Item>퍼가기</Item>
          <Item onClick={() => props.setMoreModal(false)}>취소</Item>
        </ModalWrap>
      )}
      {theme === "delete" && (
        <DeleteModalWrap>
          <Question>게시물을 삭제하시겠습니까?</Question>
          <ThisQuestion>이 게시물을 삭제하시겠습니까?</ThisQuestion>
          <DeleteModalButtonWrap>
            <DeleteModalItemDelete
              onClick={() => {
                setDeleteAllowed(true);
              }}
            >
              삭제
            </DeleteModalItemDelete>
            <DeleteModalItem onClick={() => setTheme("modal")}>
              취소
            </DeleteModalItem>
          </DeleteModalButtonWrap>
        </DeleteModalWrap>
      )}
    </Wrap>
  );
};
export default MoreModal;
