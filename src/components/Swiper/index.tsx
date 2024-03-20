import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";
import { EmptyIndex, Index, Indexes, Item, Left, Right, Wrap } from "./styles"
import React, { SetStateAction, useEffect, useState } from "react"
import left from '../../assets/leftCircleButton.png';
import right from '../../assets/rightCircleButton.png';
import { FeedContentListType } from "../../types/types";
import SwiperCore from 'swiper';

interface ContentSwiperProps {
  buttonpos: number;
  contents: FeedContentListType[]
  setSwiper?: React.Dispatch<SetStateAction<SwiperClass>>;
  setIndex?: React.Dispatch<SetStateAction<number>>;
  isModal?: boolean
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
    style={{width:'100%',height:'100%'}}
    onActiveIndexChange={(swiperCore:SwiperCore) => { setIndex(swiperCore.activeIndex) }}
    onSwiper={(e:SwiperClass) => {if(props.setSwiper) { props.setSwiper(e)}}}
  >
    {props.contents?.map((a) => (
      <SwiperSlide style={{width:'100%',height:'100%'}} key={a.id}><Item src={a.contentUrl}></Item></SwiperSlide>
    ))}
  {(index !== 0) && (<LeftButton buttonpos={props.buttonpos}/>)}
  {(index !== props.contents.length-1) && (<RightButton buttonpos={props.buttonpos}/>)}
  </Swiper>
      {props.isModal && (<Indexes>{props.contents.map((a,i) => ((index === i)?(<Index key={a.id}></Index>):(<EmptyIndex key={a.id}></EmptyIndex>)))}</Indexes>)}
  </Wrap>
  )
}
const LeftButton = (props:{buttonpos:number}) => {
  const swiper = useSwiper();

  return (<Left pos={props.buttonpos} src = {left} onClick={() => {swiper.slidePrev()}}/> )
}
const RightButton = (props:{buttonpos:number}) => {
  const swiper = useSwiper();
  return (<Right pos = {props.buttonpos} src = {right} onClick={() => {swiper.slideNext()}}/>)
}
export default ContentSwiper;