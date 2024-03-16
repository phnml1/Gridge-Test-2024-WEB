import React from "react"
import { Wrap } from "./styles"
import Feed from "./component/Feed"
import { useRecoilState } from "recoil"
import { feedsState } from "../../recoil/home"
const Feeds = () => {
  const [feeds] = useRecoilState(feedsState);
  return (<Wrap>
    {feeds.map((a) => (<Feed feed={a}/>))}
  </Wrap>)
}
export default Feeds;