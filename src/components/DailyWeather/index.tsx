import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { DailyWeatherBody } from "@/components/DailyWeather/styled";
import { getDailyWeather } from "@/store/actions";

export const DailyWeather = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDailyWeather());
  }, []);

  return <DailyWeatherBody></DailyWeatherBody>;
};
