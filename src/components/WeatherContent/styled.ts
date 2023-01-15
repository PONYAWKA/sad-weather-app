import styled from "styled-components";
interface PropsType {
  image: string;
}
export const WeatherInfoBody = styled.div<PropsType>`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80%;
  background-image: url(${({ image }) => image});
  box-shadow: -10px 5px 5px #141f25;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;
export const WeatherContentBody = styled.div`
  display: flex;
  height: 70%;
`;
