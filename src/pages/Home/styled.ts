import styled from "styled-components";

interface PropsType {
  image: string;
}

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
