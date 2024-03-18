import React from "react"
import { Item, ItemImg, Wrap } from "./styles"
import home from '../../assets/home.png';
import send from '../../assets/send.png';
import plusSquare from '../../assets/plus-square.png';
import heart from '../../assets/heart.png';
import user from '../../assets/userBottom.png';
import Dropdown from "./component/Dropdown";
import { useRecoilState } from "recoil";
import { dropdownState } from "../../recoil/home";
const BottomNavBar = () => {
  const [dropdown, setDropdown] = useRecoilState(dropdownState);
  return (<Wrap>
    <Item><ItemImg src={home}/></Item>
    <Item><ItemImg src={send}/></Item>
    <Item><ItemImg src={plusSquare}/></Item>
    <Item><ItemImg src={heart}/></Item>
    <Item><ItemImg src={user} onClick = {() => setDropdown(!dropdown)}/></Item>
    {dropdown && <Dropdown />}
  </Wrap>)
}
export default BottomNavBar;