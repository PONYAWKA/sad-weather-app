import { IdailyWeather } from "@/store/reducers/dailyWeatherReducer";
import { IPosition } from "@/store/type";

export const SET_POSITION = "SET_POSITION";
export const INIT_POSITION = "INIT_POSITION";

export const GET_DAILY_WEATHER = "GET_DAILY_WEATHER";
export const ADD_DAILY_WEATHER = "ADD_DAILY_WEATHER";

export const initPosition = (payload: IPosition) => ({
  type: INIT_POSITION,
  payload: payload,
});

export const getDailyWeather = () => ({ type: GET_DAILY_WEATHER });

export const addDailyWeather = (payload: IdailyWeather) => ({
  type: ADD_DAILY_WEATHER,
  payload: payload,
});
