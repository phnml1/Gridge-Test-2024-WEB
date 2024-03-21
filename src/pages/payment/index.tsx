import React from "react";
import { AppDownLoad, AppGuideMessage, Background, Box, CheckTerms, InobelLogo, PaymentBox, PaymentWrap, SubSribeButton, SubSribePriceText, SubSribeText, Wrap } from "./styles";
import ProFile from "../../components/payment/ProFile";
import iphone from '../../assets/Iphones-background.png';
import inobelLogo from '../../assets/inobel-logo.png';
import playStore from "../../assets/play-store-button.png";
import appStore from "../../assets/app-store-button.png";
import * as PortOne from "@portone/browser-sdk/v2";
const Payment = () => {
  async function requestPay() {
  const response = await PortOne.requestPayment({
    // Store ID 설정
    storeId: "store-4d4ed090-1a5d-4a64-b4f5-08aab5977038",
    // 채널 키 설정
    channelKey: "channel-key-b722d9f8-1af8-4b6b-8aa9-e819a6c99ecc",
    paymentId: `payment-${crypto.randomUUID()}`,
    orderName: "inovel_구독",
    totalAmount: 9900,
    currency: "CURRENCY_KRW",
    payMethod: "CARD",
    // 모바일 결제 역시 api가 없어서 임의로 가정
    redirectUrl: 'https://localhost:3000/mobilePayment',
  });
  if ( response === undefined||response.code != null) {
    // 오류 발생
    return alert('결제실패');
  }
  //결제 api없음 있으면 paymentId 이용해서 처리
}
  return (
    <Wrap>
    <ProFile />
    <PaymentWrap>
      <Background src = {iphone}></Background>
      <Box><PaymentBox>
        <InobelLogo src={inobelLogo}></InobelLogo>
        <SubSribeText>서비스를 구독하고, 더 다양한 소식을 받아보세요</SubSribeText>
        <SubSribePriceText>월 9,900원으로 구독하기</SubSribePriceText>
        <SubSribeButton onClick={() =>requestPay()}>바로 구독 신청하기</SubSribeButton>
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
