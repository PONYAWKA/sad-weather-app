import { takeLatest } from "redux-saga/effects";

import { SET_POSITION } from "@/store/actions";
import { setCityWorker } from "@/store/sagas/workerSaga/setCityWorker";

export function* setCityWatcher() {
  yield takeLatest(SET_POSITION, setCityWorker);
}
