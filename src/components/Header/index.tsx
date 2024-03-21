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
import { dropdownState, writeModalState } from "../../recoil/home";
import { useNavigate } from "react-router-dom";
const AppHeader = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch()
  const [sidebar, setSideBar] = useRecoilState<boolean>(dropdownState);
  const [,setWriteModal] = useRecoilState<boolean>(writeModalState);
  // const [visible, setVisible] = useState(false)
  return (
    <HeaderWrap>
    <Header>
      <HeaderLogo src={logo}  onClick={() => navigate('/')}></HeaderLogo>
      <HeaderContent>
        <SearchBar></SearchBar>
        <IconBox>
          <Icon src = {home} onClick={() => navigate('/')}></Icon>
          <Icon src = {send}></Icon>
          <Icon src = {plusSquare} onClick={() => {setWriteModal(true)}}></Icon>
          
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
