import { INIT_POSITION, SET_POSITION } from "@/store/actions";
import { IPosition } from "@/store/actions/Interfaces";
import { IPayload } from "@/store/reducers/interfaces";
import { getPosition } from "@/utils/currentPosition";

export const positionReducer = (
  state: IPosition = getPosition(),
  { type, payload }: IPayload
) => {
  switch (type) {
    case INIT_POSITION: {
      if (!state.lat) return { ...state, lat: payload.lat, lon: payload.lon };
      return state;
    }
    case SET_POSITION:
      return { ...state, lat: payload.lat, lon: payload.lon };
    default:
      return state;
  }
};
