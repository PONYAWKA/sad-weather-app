import styled from "styled-components";

export const InfoLineBody = styled.div`
  ${({ theme }) => theme.colors.background};
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding-bottom: ${({ theme }) => theme.spaces.ms}px;
  }
`;

export const WeatherChoiceButton = styled.button`
  margin-left: 50%;
  transform: translateX(-50%);
`;
