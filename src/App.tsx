import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/join";


const loading = <div>화면을 불러오는 중 입니다.</div>;

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Home = React.lazy(()=>import('./pages/home'));
const Payment = React.lazy(() => import('./pages/payment'));
const Login = React.lazy(() => import("./pages/login"));
const KaKao = React.lazy(() => import("./pages/kakao"));
const Page404 = React.lazy(() => import("./pages/page404/Page404"));
const Page500 = React.lazy(() => import("./pages/page500/Page500"));
const KakaoJoin = React.lazy(()=>import("./pages/join/kakaoJoin"));
//컴포넌트
const App = () => {
  
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Join/>}/>
          <Route path="/404" element={<Page404 />} />
          <Route path="/500" element={<Page500 />} />
          <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
          <Route path="/payment" element={<DefaultLayout><Payment /></DefaultLayout>} />
          <Route path="/login/kakao" element={<KaKao />} />
          <Route path="/join/kakao" element={<KakaoJoin />} />
        </Routes>
      </Suspense>
    </BrowserRouter>

  );
};

export default App;
