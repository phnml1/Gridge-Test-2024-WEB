import React, { useEffect } from "react";
import AppHeader from "../components/Header";
import styled from "styled-components";
import BottomNavBar from "../components/BottomNavBar";
import { useRecoilState } from "recoil";
import { modalState, writeModalState } from "../recoil/home";
import Modal from "../components/Modal";
import WriteModal from "../components/WriteModal";


const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  const [modal] = useRecoilState(modalState);
  const [writeModal] = useRecoilState(writeModalState);
  useEffect(() => {
    if (writeModal || modal!==-1) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  },[modal,writeModal]);
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
      <BottomNavBar/>
      {modal!==-1 && <Modal />}
      {writeModal && <WriteModal />}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  background: #F6F6F6;
  align-items: center;
  @media (max-width: 1132px) {
    width: 100%;
  }
  position: relative;
`;

export default DefaultLayout;
