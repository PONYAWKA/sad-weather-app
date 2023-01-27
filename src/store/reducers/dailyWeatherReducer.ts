import { actionsTypes } from "@/constants";
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
    case actionsTypes.ADD_DAILY_WEATHER:
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
