import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { WeatherContentBody } from "@/components/WeatherContent/styled";
import { initPosition } from "@/store/actions";

export const WeatherContent = () => {
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
      }),
    [(pos.lat, pos.lon)]
  );
  return <WeatherContentBody></WeatherContentBody>;
};
