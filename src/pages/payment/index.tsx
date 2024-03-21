import React from "react";
import { AppDownLoad, AppGuideMessage, Background, Box, CheckTerms, InobelLogo, PaymentBox, PaymentWrap, SubSribeButton, SubSribePriceText, SubSribeText, Wrap } from "./styles";
import ProFile from "../../components/payment/ProFile";
import iphone from '../../assets/Iphones-background.png';
import inobelLogo from '../../assets/inobel-logo.png';
import playStore from "../../assets/play-store-button.png";
import appStore from "../../assets/app-store-button.png";
const Payment = () => {
  
  return (
    <Wrap>
    <ProFile />
    <PaymentWrap>
      <Background src = {iphone}></Background>
      <Box><PaymentBox>
        <InobelLogo src={inobelLogo}></InobelLogo>
        <SubSribeText>서비스를 구독하고, 더 다양한 소식을 받아보세요</SubSribeText>
        <SubSribePriceText>월 9,900원으로 구독하기</SubSribePriceText>
        <SubSribeButton>바로 구독 신청하기</SubSribeButton>
        <CheckTerms>이용약관 확인하기</CheckTerms>
        </PaymentBox>
        <AppGuideMessage>앱을 다운로드 하세요.</AppGuideMessage>
          <AppDownLoad>
            <img
              src={playStore}
              alt="플레이스토어 버튼"
              width={135}
              height={40}
            />
            <img src={appStore} alt="앱스토어 버튼" width={120} height={40} />
          </AppDownLoad>
        </Box>
    </PaymentWrap>
    </Wrap>);
};
export default Payment;
