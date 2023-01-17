import { all, fork } from "redux-saga/effects";

import { getDailyWatcher } from "./watcherSaga/getDailyWatcher";

export function* rootSaga() {
  yield all([fork(getDailyWatcher)]);
}
