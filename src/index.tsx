import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RecoilRoot } from "recoil";
import "react-app-polyfill/stable";
import { GlobalStyle } from "./components/styles";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./react-query/queryClient";
// 이외에 필요한 스타일 파일이 있다면 import 해주세요.
ReactDOM.render(
  
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <GlobalStyle />
      <App />

    </RecoilRoot>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);
