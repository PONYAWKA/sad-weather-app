import { WeatherContent } from "components/WeatherContent";
import { WeatherInfoBody } from "components/WeatherContent/styled";
import { WeatherInfoLine } from "components/WeatherInfoLine";
import { WeatherBody } from "pages/Home/styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initPosinion } from "store/actions";
import {
  getBackgroundImageUrlv1,
  getBackgroundImageUrlv2,
} from "utils/getBackgroundImageUrl";

export const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(
    () =>
      navigator.geolocation.getCurrentPosition((data) => {
        dispatch(
          initPosinion({
            lat: data.coords.latitude,
            lon: data.coords.longitude,
          })
        );
      }),
    []
  );

  return (
    <WeatherBody image={getBackgroundImageUrlv2("rain")}>
      <WeatherInfoBody image={getBackgroundImageUrlv1("rain")}>
        <WeatherContent />
        <WeatherInfoLine />
      </WeatherInfoBody>
    </WeatherBody>
  );
};
