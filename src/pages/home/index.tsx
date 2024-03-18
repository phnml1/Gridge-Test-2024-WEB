import React, { useEffect } from "react";
// import { useRecoilState } from "recoil";
// import { jwtState, nameState } from "../../recoil/login";
import { FeedsWrap, HomeRoot, Wrap } from "./styles";
import DefaultLayout from "../../layout/DefaultLayout";
import Storys from "../../components/Storys";
import story1 from '../../assets/tempstory/story1.png';
import story2 from '../../assets/tempstory/story2.png';
import story3 from '../../assets/tempstory/story3.png';
import story4 from '../../assets/tempstory/story4.png';
import {request} from "../../apis/core";
import { useRecoilState } from "recoil";
import { feedsState, modalState } from "../../recoil/home";
import Feeds from "../../components/Feeds";
import Side from '../../components/home/Side';
import Modal from "../../components/Modal";
import { jwtState } from "../../recoil/login";
import { JWT_KEY } from "../../config/constant";
import { useNavigate } from "react-router-dom";
const Home = () => {
  // const [name] = useRecoilState(nameState);
  const [jwt,setJwt] = useRecoilState(jwtState);
  const [,setFeedsState] = useRecoilState(feedsState)
  const [modal] = useRecoilState(modalState);
  const jwtStorage = window.localStorage.getItem(JWT_KEY);
  const navigate = useNavigate()
  useEffect(()=> {
    if(jwtStorage) {
    setJwt(jwtStorage);
    } else {
      alert('다시 로그인해주세요');
      navigate('/sign-in');
    }
  },[jwtStorage]) 
  const handle = async () => {
    const response = await request.get('/feeds',{params: {size:10,page:1}})
    setFeedsState(response.data.result.feedList)
  }
  useEffect(() => {
    if (modal!==-1) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  },[modal]);
  useEffect(() => {
    if(jwt !== ''){
    handle();
    }
  },[jwt])
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
      {modal !== -1 && <Modal />}
    </HomeRoot>

    </DefaultLayout>
  );
};

export default Home;
