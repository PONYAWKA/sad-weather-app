import { IStore } from "@/store/interfaces";
import {
  IDailyWeather,
  IEventsReducer,
  IHourlyWeather,
  IStatusReducer,
} from "@/store/reducers/interfaces";

export const dailyWeatherSelector = ({
  dailyWeatherReducer,
}: IStore): IDailyWeather => dailyWeatherReducer;

export const hourlyWeatherSelector = ({
  dailyWeatherReducer,
}: IStore): IHourlyWeather => dailyWeatherReducer;

export const statusSelector = ({ statusReducer }: IStore): IStatusReducer =>
  statusReducer;

export const eventSelector = ({ eventsReducer }: IStore): IEventsReducer =>
  eventsReducer;
