import { put, select } from "redux-saga/effects";

import { getHourlyWeather } from "@/api/hourlyWeather/index";
import { addHourlyWeather } from "@/store/actions";
import { IHourlyWeather } from "@/store/reducers/interfaces";

export function* hourWorker() {
  const { lat, lon } = yield select(({ positionReducer }) => positionReducer);
  const { days }: IHourlyWeather & { city: string } = yield getHourlyWeather(
    lat,
    lon
  );
  yield put(addHourlyWeather({ days: days }));
}
