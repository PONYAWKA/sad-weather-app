import { put } from "redux-saga/effects";

import { getEventsApi } from "@/api/googleCalendar/getDailyEvents";
import { IEventData } from "@/api/googleCalendar/interfaces";
import { setEvents } from "@/store/actions";

export function* eventWorker() {
  try {
    const data: IEventData = yield getEventsApi();
    console.log(data);

    yield put(setEvents(data));
  } catch (e) {
    console.log(e);
  }
}
