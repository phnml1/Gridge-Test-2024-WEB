import styled from "styled-components";

export const HomeRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f6f6f6;
  @media all and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 104px;
  justify-content: center;
  @media all and (max-width: 1000px) {
    padding: 0 40px;
  }
`;
export const FeedsWrap = styled.div`
  width: 520px;
  margin-top: 30px;
  @media (min-width: 1001px) {
    margin-left: 88px;
  }
  display: flex;
  flex-direction: column;
  @media all and (max-width: 520px) {
    width: 100%;
    align-items: center;
  }
`;

export const Profile = styled.div`
  width: 80px;
  height: 80px;
`;
