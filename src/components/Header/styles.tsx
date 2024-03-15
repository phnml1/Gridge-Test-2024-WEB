import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100%;
  @media (max-width: 1132px) {
    width: 100%;
  }
  height: 80px;
  display: flex;
  justify-content: center;
  background: #FFFFFF;
  border-bottom: 1px solid #CCCCCC
 
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1132px;
  @media (max-width: 1132px) {
    width: 100%;
  }
  background: #FFFFFF;
  
  height: 80px;
  padding: 0 30px;
  align-items: center;
`;

export const HeaderLogo = styled.img`
width: 140px;
height: 50px;
`;
export const HeaderContent = styled.div`
display:flex;
justify-content:space-between;
align-items: center;
gap: 101px;
`
export const HeaderText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
`;

export const Button = styled.div`
  padding: 1rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  border-radius: 0.6rem;
  background-color: blue;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  text-align: center;
  cursor: pointer;
`;

export const IconBox = styled.div`
  display:flex;
  gap: 20px;
  @media (max-width: 1000px) {
    display:none
  }
  position:relative;
  align-items: center;
`;
export const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor:pointer;
`
export const MaskIcon = styled.img`
  width: 35px;
  height: 35px;
  cursor:pointer;
`