import React, { useEffect, useState } from "react";
import {
  Wrap,
  OutSide,
  Modal,
  ModalTitle,
  ModalContentWrap,
  Next,
} from "./styles";
import { useRecoilState } from "recoil";
import { feedsState, modifyModalState } from "../../recoil/home";
import Images from "./Images";
import { FeedContentListType, FeedType } from "../../types/types";
import Input from "./Input";
import { useModifyFeed } from "../../hooks/useModifyModal";
const ModifyModal = () => {
  const [feeds] = useRecoilState<FeedType[]>(feedsState);
  const [modifyModal, setModifyModal] = useRecoilState(modifyModalState);
  const [imageUrls, setImageUrls] = useState<FeedContentListType[]>([]);
  const [step, setStep] = useState<string>("content");
  const [feedText, setFeedText] = useState<string>("");
  console.log(feedText);
  const { modifyFeed, isSuccess } = useModifyFeed();
  const findIndex = (modal: number) => {
    return feeds.findIndex((feed) => feed.id === modal);
  };
  useEffect(() => {
    const index = findIndex(modifyModal);
    setImageUrls(feeds[index].contentList);
    setFeedText(feeds[index].feedText);
  }, []);
  useEffect(() => {
    if (imageUrls.length == 0) {
      setStep("drag");
    } else {
      setStep("content");
    }
  }, [imageUrls]);
  useEffect(() => {
    if (isSuccess) {
      setModifyModal(-1);
    }
  }, [isSuccess]);

  return (
    <Wrap>
      <OutSide onClick={() => setModifyModal(-1)}></OutSide>
      <Modal step={step}>
        <ModalTitle>
          정보수정
          {step === "content" && imageUrls.length > 0 && (
            <Next
              onClick={() =>
                modifyFeed({ id: modifyModal, feedText: feedText })
              }
            >
              완료
            </Next>
          )}
        </ModalTitle>
        <ModalContentWrap step={step}>
          <Images imageUrls={imageUrls} />
          {step === "content" && (
            <Input feedText={feedText} setFeedText={setFeedText} />
          )}
        </ModalContentWrap>
      </Modal>
    </Wrap>
  );
};
export default ModifyModal;
