import React from "react";
import { Input, InputWrap, SearchIcon, Wrap } from "./styles"
import search from '../../../../assets/search.png'
const SearchBar = () => {

  return (<Wrap>
    <InputWrap>
    <SearchIcon src = {search} />
    <Input type="text"/>
    </InputWrap>
  </Wrap>)
}
export default SearchBar;