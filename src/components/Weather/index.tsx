import { IItems } from "@/components/Weather/interfaces";
import {
  DailyWeatherBody,
  WeatherInfoElement,
  WeatherInfoElementIcon,
  WeatherInfoElementTemp,
  WeatherInfoElementWeekDay,
} from "@/components/Weather/styled";
import { getCurrentWeekDay } from "@/utils/getCurrenWeekDay";
import { getIcon } from "@/utils/getIcon";

export const Weather = ({ items, mode }: { items: IItems; mode: boolean }) => {
  return (
    <DailyWeatherBody>
      {items.days.map(({ temp, icon, date }, i) => (
        <WeatherInfoElement key={temp + date}>
          <WeatherInfoElementWeekDay>
            {mode ? (i !== 0 ? getCurrentWeekDay(date) : "Today") : date}
          </WeatherInfoElementWeekDay>
          <WeatherInfoElementIcon src={getIcon(icon)} />
          <WeatherInfoElementTemp>{Math.trunc(temp)}°С</WeatherInfoElementTemp>
        </WeatherInfoElement>
      ))}
    </DailyWeatherBody>
  );
};
