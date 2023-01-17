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
  @media (max-width: 767px) {
    background: none;
  }
`;
export const WeatherInfoBody = styled.div<PropsType>`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80%;
  background-image: url(${({ image }) => image});
  box-shadow: -10px 5px 5px #141f25;
  max-width: 1920px;
  max-height: 1080px;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;
