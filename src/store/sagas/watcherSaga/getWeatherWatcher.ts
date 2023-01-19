import { takeLatest } from "redux-saga/effects";

import { GET_WEATHER } from "@/store/actions";
import { getWeatherWorker } from "@/store/sagas/workerSaga/getWeatherWorker";

export function* getWeatherWatcher() {
  yield takeLatest(GET_WEATHER, getWeatherWorker);
}
