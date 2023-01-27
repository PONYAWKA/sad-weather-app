import { takeLatest } from "redux-saga/effects";

import { actionsTypes } from "@/constants";
import { weatherWorker } from "@/store/sagas/workerSaga/weatherWorker";

export function* weatherWatcher() {
  yield takeLatest(actionsTypes.GET_WEATHER, weatherWorker);
}
