import { INIT_POSITION } from "store/actions";
import { IPosition } from "store/type";
import { getPosition } from "utils/currentPosition";

export const positionReduser = (
  state: IPosition = getPosition(),
  { type, payload }: any
) => {
  switch (type) {
    case INIT_POSITION: {
      if (!state.lat) return { ...state, lat: payload.lat, lon: payload.lon };
      return state;
    }
    default:
      return state;
  }
};
