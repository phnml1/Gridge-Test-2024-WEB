import styled from "styled-components";

export const HomeRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height:100%;
  background: #F6F6F6;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 104px;
  height:100%;
  justify-content: center;
`;
export const BoardsWrap = styled.div`
  width: 520px;
  height:100%;
  margin-top:30px;
  @media (min-width: 1001px) {
    margin-left:88px;
  }
`;
export const Storys = styled.div`
  width: 520px;
  height:130px;
  display:flex;
  gap:8px;
  border: 1px solid #CCCCCC;
  border-radius: 10px; 
  align-items: center;
  padding: 0 20px;
`;
export const Story = styled.div`
width: 90px;
height: 90px;
border-radius: 100%;
background: linear-gradient(209.83deg, #1570EF 7.74%, #9EEFF4 94.51%);


`
export const Side = styled.div`
  width:416px;
  background: white;
  height:100%;
  @media (max-width: 1000px) {
    display:none;
  }
`
