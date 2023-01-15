export const SET_POSITION = "SET_POSITION";
export const INIT_POSITION = "INIT_POSITION";

interface initPosinionPayloadType {
  lat: number;
  lon: number;
}

export const initPosinion = (payload: initPosinionPayloadType) => ({
  type: INIT_POSITION,
  payload: payload,
});
