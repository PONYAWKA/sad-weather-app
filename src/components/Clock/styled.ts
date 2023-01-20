import styled from "styled-components";

export const ClockBody = styled.div`
  height: 40%;
  align-items: center;
  justify-content: center;
  display: flex;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;
export const ClockContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 767px) {
    margin: 0px;
  }
`;

export const Timer = styled.div`
  font-size: ${({ theme }) => theme.fonts.xx}px;
  @media (max-width: 767px) {
    font-size: ${({ theme }) => theme.fonts.xxl}px;
  }
`;
