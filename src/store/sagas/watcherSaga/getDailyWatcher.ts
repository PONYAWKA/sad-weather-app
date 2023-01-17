import { takeLatest } from "redux-saga/effects";

import { GET_DAILY_WEATHER } from "@/store/actions";
import { getDailyWorker } from "@/store/sagas/workerSaga/getDailyWorker";

export function* getDailyWatcher() {
  yield takeLatest(GET_DAILY_WEATHER, getDailyWorker);
}
