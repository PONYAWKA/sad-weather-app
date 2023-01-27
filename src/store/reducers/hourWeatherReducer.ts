import { actionsTypes } from "@/constants";

import { action, IHourlyWeather } from "./interfaces";

const initState = {
  days: [],
};

export const hourWeatherReducer = (
  state: IHourlyWeather = initState,
  { type, payload }: action
) => {
  switch (type) {
    case actionsTypes.ADD_HOURLY_WEATHER:
      if ("days" in payload) return { ...state, days: payload.days };
      return state;
    default:
      return state;
  }
};
