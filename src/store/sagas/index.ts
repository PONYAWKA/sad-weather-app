import { all, fork } from "redux-saga/effects";
import { getDailyWorker } from "./workerSaga/getDailyWorker";
export function* rootSaga() {
  yield all([fork(getDailyWorker)]);
}
