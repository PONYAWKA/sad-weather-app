import { takeLatest } from "redux-saga/effects";

import { GET_EVENTS } from "@/store/actions";
import { eventWorker } from "@/store/sagas/workerSaga/eventWorker";

export function* eventWatcher() {
  yield takeLatest(GET_EVENTS, eventWorker);
}
