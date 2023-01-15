import { INIT_POSITION, SET_POSITION } from "store/actions";
import { IState } from "store/type";
import { getPosition } from "utils/currentPosition";

export const positionReduser = (
  state: IState = getPosition(),
  { type, payload }: any
) => {
  switch (type) {
    case INIT_POSITION: {
      if (!state.lat) return { ...state, lat: payload.lat, lon: payload.lon };
      else return state;
    }
    default:
      return state;
  }
};
