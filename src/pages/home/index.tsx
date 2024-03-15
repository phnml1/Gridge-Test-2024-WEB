import React from "react";
// import { useRecoilState } from "recoil";
// import { jwtState, nameState } from "../../recoil/login";
import { BoardsWrap, HomeRoot, Side, Wrap } from "./styles";
import DefaultLayout from "../../layout/DefaultLayout";
import Storys from "../../components/Storys";
import story1 from '../../assets/tempstory/story1.png';
import story2 from '../../assets/tempstory/story2.png';
import story3 from '../../assets/tempstory/story3.png';
import story4 from '../../assets/tempstory/story4.png';
const Home = () => {
  // const [name] = useRecoilState(nameState);
  // const [jwt] = useRecoilState(jwtState);
  
  return (
    <DefaultLayout>
    <HomeRoot>
      <Wrap>
        <BoardsWrap>
          <Storys storys={[story1,story2,story3,story4]}></Storys>
        </BoardsWrap>
        <Side>

        </Side>
      </Wrap>
    </HomeRoot>
    </DefaultLayout>
  );
};

export default Home;
