import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  DailyWeatherBody,
  WeatherInfoElement,
  WeatherInfoElementIcon,
  WeatherInfoElementTemp,
  WeatherInfoElementWeekDay,
} from "@/components/DailyWeather/styled";
import { useAppSelector } from "@/store";
import { getDailyWeather } from "@/store/actions";
import { getCurrentWeekDay } from "@/utils/getCurrenWeekDay";
import { getIcon } from "@/utils/getIcon";

export const DailyWeather = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDailyWeather());
  }, []);

  const dailyWeather = useAppSelector(
    ({ dailyWeatherReducer }) => dailyWeatherReducer
  );

  return (
    <DailyWeatherBody>
      {dailyWeather.days.map(({ temp, icon, date }, i) => (
        <WeatherInfoElement key={temp}>
          <WeatherInfoElementWeekDay>
            {i !== 0 ? getCurrentWeekDay(date) : "Today"}
          </WeatherInfoElementWeekDay>
          <WeatherInfoElementIcon src={getIcon(icon)} />
          <WeatherInfoElementTemp>{temp}°С</WeatherInfoElementTemp>
        </WeatherInfoElement>
      ))}
    </DailyWeatherBody>
  );
};
