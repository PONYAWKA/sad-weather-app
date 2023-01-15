import { select } from "redux-saga/effects";
import { IState } from "store/type";
export function* getDailyWorker(): Generator<any, any, IState> {
  const position = yield select(({ positionReduser }) => positionReduser);
  yield console.log(position);
}
