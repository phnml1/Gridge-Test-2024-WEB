import React from "react"
import { Wrap } from "./styles"
import Feed from "./component/Feed"
import { useRecoilState } from "recoil"
import { feedsState } from "../../recoil/home"
import { FeedType } from "../../types/types"
const Feeds = () => {
  const [feeds] = useRecoilState(feedsState);
  return (<Wrap>
    {feeds.map((a:FeedType) => (<Feed key = {a.id} feed={a}/>))}
  </Wrap>)
}
export default Feeds;