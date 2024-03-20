import styled from "styled-components";

export const Wrap = styled.div`
  max-width: 80%;
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom:70px;
  right:30px;
  z-index:3;
  overflow: auto;
  padding:10px;
  background: rgba(26, 26, 26, .8);
  border-radius: 10px;
`;
export const Content = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
`
export const Image = styled.img`

  width: 100%;
  height: 100%;
`
export const Xbutton = styled.img`
  width:25px;
  height: 25px;
  position: absolute;
  top:0;
  right:0;
`;
export const Button = styled.img`
  margin-left:10px;
  width: 40px;
  height: 40px;
  cursor:pointer;
`