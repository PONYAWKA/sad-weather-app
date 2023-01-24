import { useEffect, useState } from "react";
import { shallowEqual, useDispatch } from "react-redux";

import { Calendar } from "@/components/Calendar";
import { Loader } from "@/components/Loader";
import { WeatherInfoLine } from "@/components/WeatherInfoLine";
import { WeatherBody, WeatherInfoBody } from "@/pages/Home/styled";
import { useAppSelector } from "@/store";
import {
  getWeather,
  initPosition,
  setCity,
  setCityName,
} from "@/store/actions";
import { statusSelector } from "@/store/selectors";

export const HomePage = () => {
  const { url, isLoading } = useAppSelector(statusSelector, shallowEqual);

  const [{ lat, lon }, setPos] = useState({ lat: 0, lon: 0 });

  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setPos({
            lat: coords.latitude,
            lon: coords.longitude,
          });
          dispatch(initPosition({ lat: lat, lon: lon }));
          dispatch(getWeather());
          dispatch(setCity());
        },
        () => {
          dispatch(initPosition({ lat: -25.763, lon: 28.337 }));
          dispatch(getWeather());
          dispatch(setCityName({ city: "Equestria" }));
        }
      );
    else console.log("аза");
  }, [lat, lon]);

  if (isLoading) return <Loader />;

  return (
    <WeatherBody image={url}>
      <WeatherInfoBody image={url}>
        <Calendar />
        <WeatherInfoLine />
      </WeatherInfoBody>
    </WeatherBody>
  );
};
