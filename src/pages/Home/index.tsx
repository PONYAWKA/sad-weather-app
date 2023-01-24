import { useEffect, useState } from "react";
import { shallowEqual, useDispatch } from "react-redux";

import { Calendar } from "@/components/Calendar";
import { WeatherInfoLine } from "@/components/WeatherInfoLine";
import { WeatherBody, WeatherInfoBody } from "@/pages/Home/styled";
import { useAppSelector } from "@/store";
import { getWeather, initPosition, setCity } from "@/store/actions";
import { statusSelector } from "@/store/selectors";

export const HomePage = () => {
  const { url, isLoading } = useAppSelector(statusSelector, shallowEqual);

  const [{ lat, lon }, setPos] = useState({ lat: 0, lon: 0 });

  const dispatch = useDispatch();

  useEffect(
    () =>
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setPos({
          lat: coords.latitude,
          lon: coords.longitude,
        });
        dispatch(initPosition({ lat: lat, lon: lon }));
        dispatch(getWeather());
        dispatch(setCity());
      }),
    [lat, lon]
  );

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
