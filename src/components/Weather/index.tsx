import { memo } from "react";

import { IItems } from "@/components/Weather/interfaces";
import {
  DailyWeatherBody,
  WeatherInfoElement,
  WeatherInfoElementIcon,
  WeatherInfoElementTemp,
  WeatherInfoElementWeekDay,
} from "@/components/Weather/styled";
import { getCurrentWeekDay } from "@/utils/getCurrentWeekDay";
import { getIcon } from "@/utils/getIcon";

const WeatherMemo = ({ items, mode }: { items: IItems; mode: boolean }) => {
  return (
    <DailyWeatherBody>
      {items.days.map(({ temp, icon, date }, i) => (
        <WeatherInfoElement key={temp + date}>
          <WeatherInfoElementWeekDay>
            {mode ? (i !== 0 ? getCurrentWeekDay(date) : "Today") : date}
          </WeatherInfoElementWeekDay>
          <WeatherInfoElementIcon
            src={getIcon(icon)}
            title={`${icon} icon`}
            alt="Loading..."
          />
          <WeatherInfoElementTemp>{Math.trunc(temp)}°С</WeatherInfoElementTemp>
        </WeatherInfoElement>
      ))}
    </DailyWeatherBody>
  );
};

export const Weather = memo(WeatherMemo);
