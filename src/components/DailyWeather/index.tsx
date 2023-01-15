import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDailyWeather } from "store/actions";
import { DailyWeatherBody } from "./styled";

export const DailyWeather = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDailyWeather());
  }, []);

  return <DailyWeatherBody></DailyWeatherBody>;
};
