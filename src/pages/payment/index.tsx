import React, { useState } from "react";
import {
  AppDownLoad,
  AppGuideMessage,
  Background,
  Box,
  CancelSubSribeButton,
  CheckTerms,
  InobelLogo,
  PaymentBox,
  PaymentWrap,
  SubSribeButton,
  SubSribePriceText,
  SubSribeText,
  Wrap,
} from "./styles";
import ProFile from "../../components/payment/ProFile";
import iphone from "../../assets/Iphones-background.png";
import inobelLogo from "../../assets/inobel-logo.png";
import playStore from "../../assets/play-store-button.png";
import appStore from "../../assets/app-store-button.png";
import * as PortOne from "@portone/browser-sdk/v2";
const Payment = () => {
  //구독에 관한 값을 받는다고 가정
  const [isSubscribe, setIsSubscribe] = useState(false);
  async function requestPay() {
    const response = await PortOne.requestPayment({
      // Store ID 설정 필요(보안상 push x)
      storeId: "key",
      // 채널 키 설정 필요(보안상 push x)
      channelKey: "key",
      paymentId: `payment-${crypto.randomUUID()}`,
      orderName: "inovel_구독",
      totalAmount: 9900,
      currency: "CURRENCY_KRW",
      payMethod: "CARD",
      // 모바일 결제 역시 api가 없어서 임의로 가정
      redirectUrl: "https://localhost:3000/mobilePayment",
    });
    if (response === undefined || response.code != null) {
      return;
    }
    //결제 api없음 있으면 paymentId 이용해서 처리
    if (response.paymentId) {
      setIsSubscribe(true);
    }
  }
  return (
    <Wrap>
      <ProFile />
      <PaymentWrap>
        <Background src={iphone}></Background>
        <Box>
          <PaymentBox>
            <InobelLogo src={inobelLogo}></InobelLogo>
            <SubSribeText>
              서비스를 구독하고, 더 다양한 소식을 받아보세요
            </SubSribeText>
            <SubSribePriceText>
              {isSubscribe ? "서비스 구독중" : "월 9,900원으로 구독하기"}
            </SubSribePriceText>
            {isSubscribe ? (
              <CancelSubSribeButton>구독 해지하기</CancelSubSribeButton>
            ) : (
              <SubSribeButton onClick={() => requestPay()}>
                바로 구독 신청하기
              </SubSribeButton>
            )}
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
    </Wrap>
  );
};
export default Payment;
