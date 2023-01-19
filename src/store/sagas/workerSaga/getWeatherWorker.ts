import { call } from "redux-saga/effects";

import { getDailyWorker } from "@/store/sagas/workerSaga/getDailyWorker";
import { getHourWorker } from "@/store/sagas/workerSaga/getHourWorker";

export function* getWeatherWorker() {
  yield call(getDailyWorker);
  yield call(getHourWorker);
}
