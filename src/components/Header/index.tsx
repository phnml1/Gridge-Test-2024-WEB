import React from "react";
import {Header,HeaderContent,HeaderLogo,HeaderWrap, Icon, IconBox, MaskIcon } from "./styles";
import SearchBar from "./components/SearchBar";
import logo from '../../assets/inobel-logo.png';
import heart from '../../assets/heart.png';
import home from '../../assets/home.png';
import send from '../../assets/send.png';
import plusSquare from '../../assets/plus-square.png';
import maskGroup from '../../assets/mask-group.png';
import Dropdown from "./components/Dropdown";
import { useRecoilState } from "recoil";
import { sidebarState } from "../../recoil/home";
const AppHeader = () => {

  // const dispatch = useDispatch()
  const [sidebar, setSideBar] = useRecoilState<boolean>(sidebarState);
  // const [visible, setVisible] = useState(false)
  return (
    <HeaderWrap>
    <Header>
      <HeaderLogo src={logo}></HeaderLogo>
      <HeaderContent>
        <SearchBar></SearchBar>
        <IconBox>
          <Icon src = {home}></Icon>
          <Icon src = {send}></Icon>
          <Icon src = {plusSquare}></Icon>
          
        <Icon src = {heart}></Icon>
       
          <MaskIcon src = {maskGroup} onClick={() => setSideBar((prev => !prev))}>
          
          </MaskIcon>
          {(sidebar) &&
        (
          <Dropdown />
        )}
        </IconBox>
        
      </HeaderContent>
    </Header>
    </HeaderWrap>
  );
};

export default AppHeader;
