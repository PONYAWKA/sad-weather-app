import { put, select } from "redux-saga/effects";

import { getHourlyWeather } from "@/api/hourlyWeather/index";
import { addHourlyWeather, setCity } from "@/store/actions";
import { IHourlyWeather } from "@/store/reducers/interfaces";

export function* getHourWorker() {
  const { lat, lon } = yield select(({ positionReducer }) => positionReducer);
  const { city, days }: IHourlyWeather & { city: string } =
    yield getHourlyWeather(lat, lon);
  console.log(days);

  yield put(addHourlyWeather({ days: days }));
  yield put(setCity(city));
}
