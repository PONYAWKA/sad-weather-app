import { put, select } from "redux-saga/effects";

import { getCityCoordByName } from "@/api/cityCoordAPI";
import { setCityName, setPosition } from "@/store/actions";
import { statusSelector } from "@/store/selectors";
import { getCityName } from "@/utils/getCityName";

export function* positionByNameWorker() {
  const { city } = yield select(statusSelector);
  const { lat, lon, newCity } = yield getCityCoordByName(city);
  yield put(setPosition({ lat: lat, lon: lon }));
  yield put(setCityName({ city: getCityName(newCity) }));
}
