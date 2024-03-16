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
import request from "../../apis/core";
import { useRecoilState } from "recoil";
import { feedsState } from "../../recoil/home";
import Feeds from "../../components/Feeds";
import Side from '../../components/home/Side';
const Home = () => {
  // const [name] = useRecoilState(nameState);
  // const [jwt] = useRecoilState(jwtState);
  const [,setFeedsState] = useRecoilState(feedsState)
  const handle = async () => {
    const response = await request.get('/feeds',{params: {size:10,page:1}})
    console.log(response);
    setFeedsState(response.data.result.feedList)
  }
  useEffect(() => {
    handle();
  },[])
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
    </HomeRoot>
    </DefaultLayout>
  );
};

export default Home;
