export const SET_POSITION = "SET_POSITION";
export const INIT_POSITION = "INIT_POSITION";

export const GET_DAILY_WEATHER = "GET_DAILY_WEATHER";

interface initPosinionPayloadType {
  lat: number;
  lon: number;
}

export const initPosinion = (payload: initPosinionPayloadType) => ({
  type: INIT_POSITION,
  payload: payload,
});

export const getDailyWeather = () => ({ type: GET_DAILY_WEATHER });
