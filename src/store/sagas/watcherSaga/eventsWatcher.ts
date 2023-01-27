import { takeLatest } from "redux-saga/effects";

import { actionsTypes } from "@/constants";
import { eventWorker } from "@/store/sagas/workerSaga/eventWorker";

export function* eventWatcher() {
  yield takeLatest(actionsTypes.GET_EVENTS, eventWorker);
}
