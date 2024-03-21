import React, { useEffect, useState } from "react";
// import { useRecoilState } from "recoil";
// import { jwtState, nameState } from "../../recoil/login";
import { FeedsWrap, HomeRoot, Wrap } from "./styles";
import Storys from "../../components/Storys";
import story1 from '../../assets/tempstory/story1.png';
import story2 from '../../assets/tempstory/story2.png';
import story3 from '../../assets/tempstory/story3.png';
import story4 from '../../assets/tempstory/story4.png';
import Feeds from "../../components/Feeds";
import Side from '../../components/home/Side';
import { JWT_KEY } from "../../config/constant";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [jwt] = useState(localStorage.getItem(JWT_KEY));
  const navigate = useNavigate();
  useEffect(()=> {
    if(!jwt) {
      alert('다시 로그인해주세요');
      navigate('/login');
    }
  },[]) 
  return (
    <HomeRoot>
      <Wrap>
        <FeedsWrap>
          {/*스토리를 받아오는게 서버에 따로 없어서 만일 있을 시 바로 반영하도록 만들었습니다. */}
          <Storys storys={[story1,story2,story3,story4]}></Storys>
          <Feeds />
        </FeedsWrap>
        <Side/>
      </Wrap>

    </HomeRoot>
  );
};

export default Home;
