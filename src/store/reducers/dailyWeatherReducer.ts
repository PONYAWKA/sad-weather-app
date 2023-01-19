import { ADD_DAILY_WEATHER } from "@/store/actions";
import { action, IDailyWeather } from "@/store/reducers/interfaces";
import { getBackgroundImageUrLv2 } from "@/utils/getBackgroundImageUrl";

const initState = {
  curIcon: "",
  days: [],
};
export const dailyWeatherReducer = (
  state: IDailyWeather = initState,
  { type, payload }: action
) => {
  switch (type) {
    case ADD_DAILY_WEATHER:
      if ("curIcon" in payload)
        return {
          ...payload,
          curIcon: getBackgroundImageUrLv2(payload.curIcon),
        };
      return state;
    default:
      return state;
  }
};
