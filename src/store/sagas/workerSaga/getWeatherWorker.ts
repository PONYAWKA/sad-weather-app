import { call, put } from "redux-saga/effects";

import { setIsLoading } from "@/store/actions";
import { getDailyWorker } from "@/store/sagas/workerSaga/getDailyWorker";
import { getHourWorker } from "@/store/sagas/workerSaga/getHourWorker";

export function* getWeatherWorker() {
  yield put(setIsLoading(true));
  yield call(getDailyWorker);
  yield call(getHourWorker);
  yield put(setIsLoading(false));
}
