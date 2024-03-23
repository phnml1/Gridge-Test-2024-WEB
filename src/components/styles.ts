import { createGlobalStyle, css } from "styled-components";

export const supportDeviceSize = 1080;

export const GlobalStyle = createGlobalStyle`
html {
font-size: 62.5%; // 1rem = 10px 로 변경 한 것
// 참고링크 = https://stackoverflow.com/questions/68790660/setting-root-font-size-not-affecting-rem-units-in-safari-for-margin-padding-et
// 128px => 12.8rem , 4px => 0.4rem 가능!

    @media all and (max-width: ${supportDeviceSize}px) {
        font-size: 31.25%;
    }
}

body {
    background: white;
    margin: 0;
    padding: 0;
    font-family: -apple-system, sans-serif, Roboto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#root {
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;

}
`;
export const TextLgBold = css`
  //styleName: Text lg/Bold;
  font-family: SF Pro Display;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;
export const TextLgSemibold = css`
  //styleName: Text lg/Semibold;
  font-family: SF Pro Display;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;
export const TextMdSemibold = css`
  //styleName: Text md/Semibold;
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
`;
export const TextSmBold = css`
  //styleName: Text sm/Bold;
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;
export const TextXsRegular = css`
  //styleName: Text xs/Regular;
  font-family: SF Pro Display;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
`;
export const TextXsMedium = css`
  //styleName: Text xs/Medium;
  font-family: SF Pro Display;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;
export const TextSmMedium = css`
  //styleName: Text sm/Medium;
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
`;
export const TextSmSemiBold = css`
  //styleName: Text sm/Semibold;
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;
export const TextSmRegular = css`
  //styleName: Text sm/Regular;
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
`;
export const TextMdRegular = css`
  //styleName: Text md/Regular;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
export const TextMdMedium = css`
  //styleName: Text md/Medium;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
export const TextMdBold = css`
  //styleName: Text md/Bold;
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
`;
export const TextLgMedium = css`
  font-family: SF Pro Display;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  text-align: left;
`;
export const TextXlSemiBold = css`
  //styleName: Text xl/Semibold;
  font-family: SF Pro Display;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
`;

export const DisplayXsMedium = css`
  //styleName: Display xs/Medium;
  font-family: SF Pro Display;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
`;
export const DisplaySmMedium = css`
  //styleName: Display sm/Medium;
  font-family: SF Pro Display;
  font-size: 30px;
  font-weight: 500;
  line-height: 38px;
  text-align: left;
`;
