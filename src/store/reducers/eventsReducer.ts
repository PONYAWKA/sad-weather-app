import { actionsTypes } from "@/constants";
import { actionType, IEventsReducer } from "@/store/reducers/interfaces";

const initState = {
  events: [],
};

export const eventsReducer = (
  state: IEventsReducer = initState,
  { type, payload }: actionType
) => {
  switch (type) {
    case actionsTypes.SET_EVENTS:
      return { ...state, events: payload };
    default:
      return state;
  }
};
