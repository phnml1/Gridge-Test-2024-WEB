import React from "react";
import AppHeader from "../components/Header";
import styled from "styled-components";


const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  /*const navigate = useNavigate()

  // 페이지 첫 로딩시 로직
  useEffect(() => {
    // 벨리데이션
    if (!user.name) {
      alert('로그인을 해주세요')
      navigate('/login')
    }
  }, [])*/
  return (
    <Root>
      <AppHeader />
      {children}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1024px;
  background: #F6F6F6;
  align-items: center;
  @media (max-width: 1132px) {
    width: 100%;
  }
`;

export default DefaultLayout;
