import { put, select } from "redux-saga/effects";

import { getCityCoord } from "@/api/cityCoordAPI";
import { setCityName } from "@/store/actions";
import { positionSelector } from "@/store/selectors";

export function* cityWorker() {
  const { lat, lon } = yield select(positionSelector);
  const { name, city } = yield getCityCoord(lat, lon);
  yield put(setCityName({ city, name }));
}
