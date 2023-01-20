import { put, select } from "redux-saga/effects";

import { getWeather, setIsLoading } from "@/store/actions";
import { getCityCoord } from "@/api/cityCoordAPI";

export function* setCityWorker() {
  const status = yield select({(statusReducer)})
  const { lat, lon, name, city} = getCityCoord();
  yield put(getWeather());
}
