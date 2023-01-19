import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { CalendarBody } from "@/components/CalendarBody";
import { WeatherInfoLine } from "@/components/WeatherInfoLine";
import { WeatherBody, WeatherInfoBody } from "@/pages/Home/styled";
import { useAppSelector } from "@/store";
import { getDailyWeather, initPosition } from "@/store/actions";

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
        dispatch(getDailyWeather());
        dispatch(initPosition({ lat: pos.lat, lon: pos.lon }));
      }),
    [(pos.lat, pos.lon)]
  );
  const { isLoading } = useAppSelector(({ statusReducer }) => statusReducer);
  if (isLoading) return <div>loading</div>;
  return (
    <WeatherBody image={url}>
      <WeatherInfoBody image={url}>
        <CalendarBody />
        <WeatherInfoLine />
      </WeatherInfoBody>
    </WeatherBody>
  );
};
