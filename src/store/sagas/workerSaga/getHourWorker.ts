import { put, select } from "redux-saga/effects";

import { getHourlyWeather } from "@/api/hourlyWeather/index";
import { addHourlyWeather, setCity, setCityName } from "@/store/actions";
import { IHourlyWeather } from "@/store/reducers/interfaces";

export function* getHourWorker() {
  const { lat, lon } = yield select(({ positionReducer }) => positionReducer);
  const { city, days }: IHourlyWeather & { city: string } =
    yield getHourlyWeather(lat, lon);
  yield put(addHourlyWeather({ days: days }));
  yield put(setCityName({ city }));
}
