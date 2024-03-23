import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  max-width: 656px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
    order: 2;
  }
`;
export const ImagesBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
