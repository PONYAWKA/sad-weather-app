import styled from "styled-components";

export const DailyWeatherBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  overflow-x: scroll;
  box-sizing: border-box;
  @media (min-width: ${({ theme }) => theme.breakPoints.laptopL}px) {
    justify-content: center;
    overflow-x: hidden;
  }
  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.spaces.s}px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: ${({ theme }) => theme.spaces.s}px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.spaces.s}px;
    box-shadow: inset 0 0 ${({ theme }) => theme.spaces.s}px
      ${({ theme }) => theme.colors.white};
  }
`;

export const WeatherInfoElement = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 ${({ theme }) => theme.spaces.m}px;
  margin-top: ${({ theme }) => theme.spaces.s}px;
  box-sizing: border-box;
  &:first-child {
    flex-direction: row;
    position: sticky;
    width: ${({ theme }) => theme.spaces.xx}px;
    align-items: center;
    padding: ${({ theme }) => theme.spaces.s}px;
    border-radius: ${({ theme }) => theme.spaces.m}px;
    margin-right: ${({ theme }) => theme.spaces.mm}px;
  }
`;

export const WeatherInfoElementWeekDay = styled.div`
  text-align: center;
`;
export const WeatherInfoElementIcon = styled.img``;
export const WeatherInfoElementTemp = styled.p`
  font-size: ${({ theme }) => theme.fonts.x}px;
  text-align: center;
  margin: 0;
`;
