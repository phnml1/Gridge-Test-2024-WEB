import styled from "styled-components";
import { TextMdBold, TextMdMedium } from "../../components/styles";

export const Wrap = styled.div`
  width: 100%;
  height: 1193px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PaymentWrap = styled.div`
  display: flex;
  gap: 54px;
  margin-top: 83px;
  margin-right: 8px;
`;
export const Background = styled.img`
  width: 520px;
  height: 780px;
`;
export const Box = styled.div`
  width: 450px;
  height: 780px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PaymentBox = styled.div`
  width: 416px;
  margin-right: 2px;
  border-bottom: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  height: 532px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;
export const InobelLogo = styled.img`
  width: 217px;
  height: 80px;
  margin-top: 50px;
  margin-right: 0.5px;
`;
export const SubSribeText = styled.div`
  margin-top: 10px;
  margin-left: 7px;
  ${TextMdBold};
  color: #7f7f7f;
`;
export const SubSribePriceText = styled.div`
  margin-top: 23px;
  margin-left: 7.5px;
  font-family: SF Pro Display;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #2c2c2c;
`;
export const SubSribeButton = styled.div`
  width: 320px;
  height: 44px;
  background: #2e90fa;
  padding-left: 7.5px;
  box-sizing: border-box;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  margin-top: 71px;
  cursor: pointer;
`;
export const CancelSubSribeButton = styled.div`
  width: 320px;
  height: 44px;
  background: #f04438;
  padding-left: 7.5px;
  box-sizing: border-box;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  margin-top: 71px;
  cursor: pointer;
`;
export const CheckTerms = styled.div`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.71px;
  text-align: center;
  color: #101828;
  margin-top: 10px;
`;

export const AppGuideMessage = styled.div`
  //styleName: Text md/Medium;
  ${TextMdMedium};
  font-weight: 500;
  text-align: center;
  margin-left: 2.5px;
  color: #7f7f7f;
  margin-top: 71px;
`;
export const AppDownLoad = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-right: 2.5px;
  margin-top: 10px;
`;
