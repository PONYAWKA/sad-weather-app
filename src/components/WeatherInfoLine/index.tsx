import { useState } from "react";

import { Weather } from "@/components/Weather/index";
import {
  InfoLineBody,
  WeatherChoiceButton,
} from "@/components/WeatherInfoLine/styled";
import { useAppSelector } from "@/store";
import { dailyWeatherSelector, hourlyWeatherSelector } from "@/store/selectors";
//true - daily
//false - hourly
export const WeatherInfoLine = () => {
  const [weatherMode, setWeatherMode] = useState(false);
  const dailyWeather = useAppSelector(dailyWeatherSelector);
  const hourlyWeather = useAppSelector(hourlyWeatherSelector);

  const changeModeHandler = () => setWeatherMode((prev) => !prev);
  return (
    <InfoLineBody>
      <WeatherChoiceButton onClick={changeModeHandler} data-cy="switch-button">
        {weatherMode ? "Hourly Weather" : "Daily Weather "}
      </WeatherChoiceButton>
      <Weather
        items={weatherMode ? dailyWeather : hourlyWeather}
        mode={weatherMode}
      />
    </InfoLineBody>
  );
};
