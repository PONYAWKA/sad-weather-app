import styled from "styled-components";

export const InfoLineBody = styled.div`
  ${({ theme }) => theme.colors.background};
  padding-bottom: ${({ theme }) => theme.spaces.m}px;
  @media (max-width: 767px) {
    padding-bottom: ${({ theme }) => theme.spaces.m}px;
  }
  @media (max-width: 1310px) {
    padding-bottom: ${({ theme }) => theme.spaces.ss}px;
  }
  @media (max-width: 426px) {
    padding-bottom: ${({ theme }) => theme.spaces.mm}px;
  }
`;

export const WeatherChoiceButton = styled.button`
  margin-left: 50%;
  transform: translateX(-50%);
`;
