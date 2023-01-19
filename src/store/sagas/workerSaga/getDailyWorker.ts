import { getDailyWeatherAPI } from "api/dailyWeather";
import { put, select } from "redux-saga/effects";

import { addDailyWeather, setBackground, setIsLoading } from "@/store/actions";
import { IDailyWeather } from "@/store/reducers/interfaces";

export function* getDailyWorker() {
  yield put(setIsLoading(true));
  const { lat, lon } = yield select(({ positionReducer }) => positionReducer);
  const data: IDailyWeather = yield getDailyWeatherAPI(lat, lon);
  yield put(setBackground(data.curIcon));
  yield put(addDailyWeather(data));
  yield put(setIsLoading(false));
}
