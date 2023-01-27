import { takeLatest } from "redux-saga/effects";

import { actionsTypes } from "@/constants";
import { positionByNameWorker } from "@/store/sagas/workerSaga/positionByNameWorker";

export function* positionByNameWatcher() {
  yield takeLatest(actionsTypes.SET_POSITION_BY_NAME, positionByNameWorker);
}
