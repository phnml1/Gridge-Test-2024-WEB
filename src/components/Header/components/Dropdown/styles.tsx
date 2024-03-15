import styled from "styled-components";

export const Wrap = styled.div`
  width: 280px;
  height: 312px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #FFFFFF;
  border: 1px solid #EAECF0;
  box-sizing: border-box;
  padding: 20px;
  position: absolute;
  top:50px;
  right:-9px;
`;
export const Item = styled.div`
width: 240px;
height: 48px;
gap: 8px;
padding:12px;
display: flex;
cursor:pointer;
&:hover {
  background: #F6F6F6;

}
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`
export const Text = styled.div`
width: 176px;
height: 24px;
gap: 4px;
`

