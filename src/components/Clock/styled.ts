import styled from "styled-components";

export const ClockBody = styled.div`
  height: 40%;
  align-items: center;
  justify-content: center;
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    justify-content: center;
  }
`;
export const ClockContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    margin: 0px;
  }
`;

export const Timer = styled.div`
  font-size: ${({ theme }) => theme.fonts.xx}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts.xxl}px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.fold}px) {
    text-align: center;
    font-size: ${({ theme }) => theme.fonts.x}px;
  }
`;
