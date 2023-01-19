import { ADD_DAILY_WEATHER } from "@/store/actions";
import { getBackgroundImageUrLv2 } from "@/utils/getBackgroundImageUrl";

interface day {
  temp: number;
  icon: string;
  date: string;
}

export interface IdailyWeather {
  curTemp: number;
  curIcon: string;
  days: day[];
}

interface action {
  type: string;
  payload: IdailyWeather;
}

const initState = {
  curTemp: 0,
  curIcon: "",
  days: [],
};
export const dailyWeatherReducer = (
  state: IdailyWeather = initState,
  { type, payload }: action
) => {
  switch (type) {
    case ADD_DAILY_WEATHER:
      return { ...payload, curIcon: getBackgroundImageUrLv2(payload.curIcon) };
    default:
      return state;
  }
};
