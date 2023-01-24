import { call, put } from "redux-saga/effects";

import { setIsLoading } from "@/store/actions";
import { dailyWorker } from "@/store/sagas/workerSaga/dailyWorker";
import { hourWorker } from "@/store/sagas/workerSaga/hourWorker";

export function* weatherWorker() {
  yield put(setIsLoading(true));
  yield call(dailyWorker);
  yield call(hourWorker);
  yield put(setIsLoading(false));
}
