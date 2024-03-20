import React, { useEffect, useState } from "react";
// import { useRecoilState } from "recoil";
// import { jwtState, nameState } from "../../recoil/login";
import { FeedsWrap, HomeRoot, Wrap } from "./styles";
import DefaultLayout from "../../layout/DefaultLayout";
import Storys from "../../components/Storys";
import story1 from '../../assets/tempstory/story1.png';
import story2 from '../../assets/tempstory/story2.png';
import story3 from '../../assets/tempstory/story3.png';
import story4 from '../../assets/tempstory/story4.png';
import { useRecoilState } from "recoil";
import { modalState } from "../../recoil/home";
import Feeds from "../../components/Feeds";
import Side from '../../components/home/Side';
import Modal from "../../components/Modal";
import { JWT_KEY } from "../../config/constant";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [modal] = useRecoilState(modalState);
  const [jwt] = useState(localStorage.getItem(JWT_KEY));
  const navigate = useNavigate();
  useEffect(()=> {
    if(!jwt) {
      alert('다시 로그인해주세요');
      navigate('/login');
    }
  },[]) 
  useEffect(() => {
    if (modal!==-1) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  },[modal]);
  return (
    <DefaultLayout>
    <HomeRoot>
      <Wrap>
        <FeedsWrap>
          {/*스토리를 받아오는게 서버에 따로 없어서 만일 있을 시 바로 반영하도록 만들었습니다. */}
          <Storys storys={[story1,story2,story3,story4]}></Storys>
          <Feeds />
        </FeedsWrap>
        <Side/>
      </Wrap>
      {modal!==-1 && <Modal />}
      
    </HomeRoot>

    </DefaultLayout>
  );
};

export default Home;
