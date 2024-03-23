import {
  ImagesBackground,
  Wrap,
} from "./styles";
import React from "react";
import ContentSwiper from "../../Swiper";
import { FeedContentListType } from "../../../types/types";


interface ImagesProps {
  imageUrls: FeedContentListType[];
}
const Images = (props: ImagesProps) => {
  
  return (
    <Wrap
    >
      {props.imageUrls.length > 0 && (
        <ImagesBackground>
          <ContentSwiper buttonpos={20} contents={props.imageUrls}></ContentSwiper>
        </ImagesBackground>
      )}
    </Wrap>
  );
};
export default Images;
