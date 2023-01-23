import {
  IDailyWeather,
  IEventsReducer,
  IHourlyWeather,
  IStatusReducer,
} from "@/store/reducers/interfaces";

import { IPosition } from "./actions/Interfaces";

export interface IStore {
  dailyWeatherReducer: IDailyWeather;
  hourWeatherReducer: IHourlyWeather;
  positionReducer: IPosition;
  statusReducer: IStatusReducer;
  eventsReducer: IEventsReducer;
}
