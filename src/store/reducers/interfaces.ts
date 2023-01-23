import { IEventData } from "@/api/googleCalendar/interfaces";
import { IPosition } from "@/store/actions/Interfaces";

export interface IHourlyWeather {
  days: day[];
}

export interface IDailyWeather {
  curIcon: string;
  days: day[];
}

export interface action {
  type: string;
  payload: IDailyWeather | IHourlyWeather;
}

interface day {
  temp: number;
  icon: string;
  date: string;
}

export interface IPayload {
  type: string;
  payload: IPosition;
}
export interface IStatusReducer {
  url: string;
  isLoading: boolean;
  city: string;
  name: string;
}

export interface IEventsReducer {
  events: IEventData[];
}

export interface actionType {
  type: string;
  payload: string | boolean | { city: string; name: string };
}
