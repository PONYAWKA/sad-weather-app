import { getDailyWeatherAPI } from "api/dailyWeather";
import { put, select } from "redux-saga/effects";

import { addDailyWeather, setBackground, setIsLoading } from "@/store/actions";
import { IdailyWeather } from "@/store/reducers/dailyWeatherReducer";
export function* getDailyWorker() {
  yield put(setIsLoading(true));
  const { lat, lon } = yield select(({ positionReducer }) => positionReducer);
  const data: IdailyWeather = yield getDailyWeatherAPI(lat, lon);
  yield put(setBackground(data.curIcon));
  yield put(addDailyWeather(data));
  yield put(setIsLoading(false));
}
