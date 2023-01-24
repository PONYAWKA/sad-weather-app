import { IEventData } from "@/api/googleCalendar/interfaces";
import { IPosition } from "@/store/actions/Interfaces";
import { IDailyWeather, IHourlyWeather } from "@/store/reducers/interfaces";

export const SET_POSITION = "SET_POSITION";
export const INIT_POSITION = "INIT_POSITION";

export const GET_WEATHER = "GET_WEATHER";

export const ADD_DAILY_WEATHER = "ADD_DAILY_WEATHER";

export const ADD_HOURLY_WEATHER = "ADD_HOURLY_WEATHER";

export const SET_BACKGROUND = "SET_BACKGROUND";
export const SET_LOADING = "SET_LOADING";
export const SET_CITY = "SET_CITY";
export const SET_CITY_NAME = "SET_CITY_NAME";
export const SET_AUTHORIZATION = "SET_AUTHORIZATION";

export const SET_EVENTS = "SET_EVENTS";
export const GET_EVENTS = "GET_EVENTS";

export const initPosition = (payload: IPosition) => ({
  type: INIT_POSITION,
  payload: payload,
});

export const setEvents = (payload: IEventData[]) => ({
  type: SET_EVENTS,
  payload: payload,
});
export const getEvents = () => ({ type: GET_EVENTS });

export const setPosition = (payload: IPosition) => ({
  type: SET_POSITION,
  payload: payload,
});

export const setAuth = (payload: boolean) => ({
  type: SET_AUTHORIZATION,
  payload: payload,
});

export const getWeather = () => ({ type: GET_WEATHER });

export const addDailyWeather = (payload: IDailyWeather) => ({
  type: ADD_DAILY_WEATHER,
  payload: payload,
});

export const setBackground = (payload: string) => ({
  type: SET_BACKGROUND,
  payload: payload,
});

export const setIsLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload: payload,
});

export const setCity = () => ({
  type: SET_CITY,
});
export const setCityName = (payload: { city: string }) => ({
  type: SET_CITY_NAME,
  payload: payload,
});

export const addHourlyWeather = (payload: IHourlyWeather) => ({
  type: ADD_HOURLY_WEATHER,
  payload: payload,
});
