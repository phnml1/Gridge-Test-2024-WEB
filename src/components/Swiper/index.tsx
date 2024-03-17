import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";
import { Item, Left, Right, Wrap } from "./styles"
import React, { SetStateAction, useEffect, useState } from "react"
import left from '../../assets/leftCircleButton.png';
import right from '../../assets/rightCircleButton.png';
import { FeedContentListType } from "../../types/types";
import SwiperCore from 'swiper';
interface ContentSwiperProps {
  buttonpos: number;
  contents: FeedContentListType[];
  setSwiper?: React.Dispatch<SetStateAction<SwiperClass>>;
  setIndex?: React.Dispatch<SetStateAction<number>>;
}
const ContentSwiper = (props:ContentSwiperProps) => {
  const [index,setIndex] = useState(0);
  useEffect(()=>{
    if(props.setIndex) {
      props.setIndex(index);
    }
  },[index])
  return (
    <Wrap>
  <Swiper
    slidesPerView={1}
    modules={[Pagination,Navigation]}
    style={{height:'100%'}}
    onActiveIndexChange={(swiperCore:SwiperCore) => { setIndex(swiperCore.activeIndex) }}
    onSwiper={(e:SwiperClass) => {if(props.setSwiper) { props.setSwiper(e)}}}
  >
    {props.contents.map((a) => (
      <SwiperSlide key={a.id}><Item src={a.contentUrl}></Item></SwiperSlide>
    ))}
  {(index !== 0) && (<LeftButton/>)}
  {(index !== props.contents.length-1) && (<RightButton />)}
  </Swiper>

  </Wrap>
  )
}
const LeftButton = () => {
  const swiper = useSwiper();

  return (<Left src = {left} onClick={() => {swiper.slidePrev()}}/> )
}
const RightButton = () => {
  const swiper = useSwiper();
  return (<Right src = {right} onClick={() => {swiper.slideNext()}}/>)
}
export default ContentSwiper;