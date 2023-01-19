import styled from "styled-components";

export const InfoLineBody = styled.div`
  ${({ theme }) => theme.colors.background};
  padding-bottom: ${({ theme }) => theme.spaces.s}px;
`;

export const WeatherChoiceButton = styled.button`
  margin-left: 50%;
  transform: translateX(-50%);
`;
