import { put, select } from "redux-saga/effects";

import { getCityCoord } from "@/api/cityCoordAPI";
import { getWeather, setCityName, setPosition } from "@/store/actions";

export function* cityWorker() {
  const NewCity: string = yield select(
    ({ statusReducer }) => statusReducer.city
  );
  const { lat, lon, name, city } = yield getCityCoord(NewCity);
  yield put(setPosition({ lat, lon }));
  yield put(setCityName({ city, name }));
  yield put(getWeather());
}
