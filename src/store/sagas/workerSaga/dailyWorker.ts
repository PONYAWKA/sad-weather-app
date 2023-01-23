import { put, select } from "redux-saga/effects";

import { getDailyWeatherAPI } from "@/api/dailyWeather/index";
import { addDailyWeather, setBackground } from "@/store/actions";
import { IDailyWeather } from "@/store/reducers/interfaces";

export function* dailyWorker() {
  const { lat, lon } = yield select(({ positionReducer }) => positionReducer);
  const data: IDailyWeather = yield getDailyWeatherAPI(lat, lon);
  yield put(setBackground(data.curIcon));
  yield put(addDailyWeather(data));
}
