import { fork } from "redux-saga/effects";

import { getWeatherWatcher } from "@/store/sagas/watcherSaga/getWeatherWatcher";
import { setCityWatcher } from "@/store/sagas/watcherSaga/setCityWatcher";

export function* rootSaga() {
  yield fork(getWeatherWatcher);
  yield fork(setCityWatcher);
}
