import { IEventData } from "@/api/googleCalendar/interfaces";
import { actionsTypes } from "@/constants";
import { IPosition } from "@/store/actions/Interfaces";
import { IDailyWeather, IHourlyWeather } from "@/store/reducers/interfaces";

export const initPosition = (payload: IPosition) => ({
  type: actionsTypes.INIT_POSITION,
  payload: payload,
});

export const setEvents = (payload: IEventData[]) => ({
  type: actionsTypes.SET_EVENTS,
  payload: payload,
});
export const getEvents = () => ({ type: actionsTypes.GET_EVENTS });

export const setPosition = (payload: IPosition) => ({
  type: actionsTypes.SET_POSITION,
  payload: payload,
});

export const setPositionByName = () => ({
  type: actionsTypes.SET_POSITION_BY_NAME,
});
export const setAuth = (payload: boolean) => ({
  type: actionsTypes.SET_AUTHORIZATION,
  payload: payload,
});

export const getWeather = () => ({ type: actionsTypes.GET_WEATHER });

export const addDailyWeather = (payload: IDailyWeather) => ({
  type: actionsTypes.ADD_DAILY_WEATHER,
  payload: payload,
});

export const setBackground = (payload: string) => ({
  type: actionsTypes.SET_BACKGROUND,
  payload: payload,
});

export const setIsLoading = (payload: boolean) => ({
  type: actionsTypes.SET_LOADING,
  payload: payload,
});

export const setCity = () => ({
  type: actionsTypes.SET_CITY,
});
export const setCityName = (payload: { city: string }) => ({
  type: actionsTypes.SET_CITY_NAME,
  payload: payload,
});

export const addHourlyWeather = (payload: IHourlyWeather) => ({
  type: actionsTypes.ADD_HOURLY_WEATHER,
  payload: payload,
});
