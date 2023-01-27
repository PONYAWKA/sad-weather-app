import styled from "styled-components";

import { PropsType } from "./interfaces";

export const WeatherBody = styled.div<PropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(${({ image }) => image});
  width: 100%;
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    background: none;
  }
`;
export const WeatherInfoBody = styled.div<PropsType>`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80%;
  background-image: url(${({ image }) => image});
  box-shadow: -${({ theme }) => theme.spaces.s}px ${({ theme }) =>
      theme.spaces.ss}px ${({ theme }) => theme.spaces.ss}px ${({ theme }) => theme.colors.grayShadow};
  max-width: ${({ theme }) => theme.spaces.maxX}px;
  max-height: ${({ theme }) => theme.spaces.maxY}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    width: 100%;
    height: 100%;
  }
`;
