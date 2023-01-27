import { actionsTypes } from "@/constants";
import { IPosition } from "@/store/actions/Interfaces";
import { IPayload } from "@/store/reducers/interfaces";
import { getPosition } from "@/utils/currentPosition";

export const positionReducer = (
  state: IPosition = getPosition(),
  { type, payload }: IPayload
) => {
  switch (type) {
    case actionsTypes.INIT_POSITION: {
      if (!state.lat) return { ...state, lat: payload.lat, lon: payload.lon };
      return state;
    }
    case actionsTypes.SET_POSITION:
      return { ...state, lat: payload.lat, lon: payload.lon };
    default:
      return state;
  }
};
