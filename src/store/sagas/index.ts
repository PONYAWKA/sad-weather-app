import { all, fork } from "redux-saga/effects";

import { getWeatherWatcher } from "./watcherSaga/getWeatherWatcher";

export function* rootSaga() {
  yield all([fork(getWeatherWatcher)]);
}
