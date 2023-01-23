import { takeLatest } from "redux-saga/effects";

import { SET_CITY } from "@/store/actions";
import { cityWorker } from "@/store/sagas/workerSaga/cityWorker";

export function* cityWatcher() {
  yield takeLatest(SET_CITY, cityWorker);
}
