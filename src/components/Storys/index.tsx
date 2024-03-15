import React from "react";
import { Story, StoryImg, Wrap } from "./styles";

interface StorysProps {
  storys : string[]
}

const Storys = (props:StorysProps) => {
  return (<Wrap>
    {
      props.storys.map((a)=>(
        <Story>
          <StoryImg src={a}/>
        </Story>
      ))
    }
  </Wrap>);
}
export default Storys;