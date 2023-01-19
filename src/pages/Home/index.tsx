import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Calendar } from "@/components/Calendar";
import { WeatherInfoLine } from "@/components/WeatherInfoLine";
import { WeatherBody, WeatherInfoBody } from "@/pages/Home/styled";
import { useAppSelector } from "@/store";
import { getWeather, initPosition } from "@/store/actions";

export const HomePage = () => {
  const { url } = useAppSelector(({ statusReducer }) => statusReducer);
  const [pos, setPos] = useState({ lat: 0, lon: 0 });
  const dispatch = useDispatch();
  useEffect(
    () =>
      navigator.geolocation.getCurrentPosition((data) => {
        setPos({
          lat: data.coords.latitude,
          lon: data.coords.longitude,
        });
        dispatch(initPosition({ lat: pos.lat, lon: pos.lon }));
        dispatch(getWeather());
      }),
    [pos.lat, pos.lon]
  );
  const { isLoading } = useAppSelector(({ statusReducer }) => statusReducer);
  if (isLoading) return <div>loading</div>;
  return (
    <WeatherBody image={url}>
      <WeatherInfoBody image={url}>
        <Calendar />
        <WeatherInfoLine />
      </WeatherInfoBody>
    </WeatherBody>
  );
};
