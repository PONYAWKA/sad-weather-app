import { IPosition } from "@/store/actions/Interfaces";
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
  hourWeatherReducer,
}: IStore): IHourlyWeather => hourWeatherReducer;

export const statusSelector = ({ statusReducer }: IStore): IStatusReducer =>
  statusReducer;

export const eventSelector = ({ eventsReducer }: IStore): IEventsReducer =>
  eventsReducer;

export const positionSelector = ({ positionReducer }: IStore): IPosition =>
  positionReducer;
