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
export const TextSmMedium = css`
  //styleName: Text sm/Medium;
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
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
