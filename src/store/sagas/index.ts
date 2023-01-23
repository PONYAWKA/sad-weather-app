import { fork } from "redux-saga/effects";

import { cityWatcher } from "@/store/sagas/watcherSaga/cityWatcher";
import { eventWatcher } from "@/store/sagas/watcherSaga/eventsWatcher";
import { weatherWatcher } from "@/store/sagas/watcherSaga/weatherWatcher";

export function* rootSaga() {
  yield fork(weatherWatcher);
  yield fork(cityWatcher);
  yield fork(eventWatcher);
}
