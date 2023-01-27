import { takeLatest } from "redux-saga/effects";

import { actionsTypes } from "@/constants";
import { cityWorker } from "@/store/sagas/workerSaga/cityWorker";

export function* cityWatcher() {
  yield takeLatest(actionsTypes.SET_CITY, cityWorker);
}
