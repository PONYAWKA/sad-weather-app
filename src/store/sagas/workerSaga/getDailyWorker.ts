import { getDailyWeatherAPI } from "api/dailyWeather";
import { select, put } from "redux-saga/effects";
import { addDailyWeather } from "store/actions";
import { IdailyWeather } from "store/redusers/dailyWeatherReduser";
export function* getDailyWorker() {
  const { lat, lon } = yield select(({ positionReduser }) => positionReduser);
  const data: IdailyWeather = yield getDailyWeatherAPI(lat, lon);
  yield put(addDailyWeather(data));
}
