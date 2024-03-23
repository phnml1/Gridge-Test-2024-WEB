import styled from "styled-components";

export const Wrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 61px;
  display: flex;
  background: white;
  justify-content: space-between;
  z-index: 8;
  padding: 0 8px 11px 8px;
  box-sizing: border-box;
  @media (min-width: 1000px) {
    display: none;
  }
`;
export const Item = styled.div`
  width: 12.5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemImg = styled.img`
  width: 24px;
  height: 24px;
`;
