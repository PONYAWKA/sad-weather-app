import { useState } from "react";

import { DailyWeather } from "@/components/DailyWeather/index";
import {
  InfoLineBody,
  WeatherChoiceButton,
} from "@/components/WeatherInfoLine/styled";
import { useAppSelector } from "@/store";
//true - daily
//false - hourly
export const WeatherInfoLine = () => {
  const [weatherMode, setWeatherMode] = useState(false);
  const dailyWeather = useAppSelector(
    ({ dailyWeatherReducer }) => dailyWeatherReducer
  );
  const hourlyWeather = useAppSelector(
    ({ hourWeatherReducer }) => hourWeatherReducer
  );

  const changeModeHandler = () => setWeatherMode((prev) => !prev);
  return (
    <InfoLineBody>
      <WeatherChoiceButton onClick={changeModeHandler}>
        {weatherMode ? "Hourly Weather" : "Daily Weather "}
      </WeatherChoiceButton>
      <DailyWeather
        items={weatherMode ? dailyWeather : hourlyWeather}
        mode={weatherMode}
      />
    </InfoLineBody>
  );
};
