import { takeLatest } from "redux-saga/effects";

import { GET_WEATHER } from "@/store/actions";
import { weatherWorker } from "@/store/sagas/workerSaga/weatherWorker";

export function* weatherWatcher() {
  yield takeLatest(GET_WEATHER, weatherWorker);
}
