import { getDailyWeatherAPI } from "api/dailyWeather";
import { put, select } from "redux-saga/effects";

import { addDailyWeather } from "@/store/actions";
import { IdailyWeather } from "@/store/reducers/dailyWeatherReducer";
export function* getDailyWorker() {
  const { lat, lon } = yield select(({ positionReducer }) => positionReducer);
  const data: IdailyWeather = yield getDailyWeatherAPI(lat, lon);
  yield put(addDailyWeather(data));
}
