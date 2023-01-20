import { takeLatest } from "redux-saga/effects";

import { SET_CITY } from "@/store/actions";
import { setCityWorker } from "@/store/sagas/workerSaga/setCityWorker";

export function* setCityWatcher() {
  yield takeLatest(SET_CITY, setCityWorker);
}
