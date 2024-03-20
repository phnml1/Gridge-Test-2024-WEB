import styled from "styled-components";

export const Wrap = styled.div`
  width:100%;
  height: 100%;
  position: relative;
`

export const Item = styled.img`
  height:100%;
  width:100%;
`;
export const Left = styled.img<{pos:number}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left:${(props) => props.pos}px;
  width: 30px;
  height:30px;
  cursor:pointer;
  z-index:999;
`;
export const Right = styled.img<{pos:number}>`
position: absolute;
top: 50%;
transform: translateY(-50%);
right: ${(props) => props.pos}px;
width: 30px;
height:30px;
cursor:pointer;
z-index:999;
`;

export const Indexes = styled.div`
  display:flex;
  gap: 2px;
  width: 40px;
  height: 5px;
  justify-content: center;
  position:absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index:40;
  `
export const Index = styled.div`
  border-radius: 100%;
  width: 5px;
  height: 5px;
  background: #2F80ED;
  z-index:40;
`

export const EmptyIndex = styled.div`
border-radius: 100%;
  width: 5px;
  height: 5px;
  background: #E0E0E0;
  z-index:40;
`