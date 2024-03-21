import React, { SetStateAction } from "react";
import { Wrap, Image, Button, Content, Xbutton } from "./styles";
import { FeedContentListType } from "../../../../types/types";
import plusButton from '../../../../assets/plus-square.png';
import xButton from '../../../../assets/x-circle.png';
interface PlusMenuProps {
  contents: FeedContentListType[];
  setFileInfo: React.Dispatch<SetStateAction<File>>;
  handleFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setImageUrls :React.Dispatch<SetStateAction<FeedContentListType[]>>;
  setPlusMenu : React.Dispatch<SetStateAction<boolean>>;
}

const PlusMenu = (props:PlusMenuProps) => {

  
  return (<Wrap>
    {props.contents.map((a) => <Content key={a.id}><Image src = {a.contentUrl} >

    </Image><Xbutton onClick = {() => props.setImageUrls(prevUrls =>
    prevUrls.filter(item => item.id !== a.id)
  )} src={xButton}/></Content>)}
    {(props.contents.length<5)&&(<label htmlFor="fileInput">
    <Button src = {plusButton} />
    </label>)}
    <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={props.handleFileInputChange}
          style={{ display: "none" }}
        />
  </Wrap>)
} 
export default PlusMenu;