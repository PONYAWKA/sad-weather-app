import { WeatherContent } from "components/WeatherContent";
import { WeatherInfoBody } from "components/WeatherContent/styled";
import { WeatherInfoLine } from "components/WeatherInfoLine";
import { WeatherBody } from "pages/Home/styled";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initPosinion } from "store/actions";
import {
  getBackgroundImageUrlv1,
  getBackgroundImageUrlv2,
} from "utils/getBackgroundImageUrl";

export const HomePage = () => {
  const [pos, setPos] = useState({ lat: 0, lon: 0 });

  const dispatch = useDispatch();

  useEffect(
    () =>
      navigator.geolocation.getCurrentPosition((data) => {
        setPos({
          lat: data.coords.latitude,
          lon: data.coords.longitude,
        });
        dispatch(initPosinion({ lat: pos.lat, lon: pos.lon }));
      }),
    [(pos.lat, pos.lon)]
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
