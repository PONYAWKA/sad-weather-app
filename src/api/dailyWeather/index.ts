import { GET_VISUAL_CROSSING_BASE_URL } from "api/config";

export const getDailyWeather = async (lat: number, lon: number) => {
  const data = await fetch(GET_VISUAL_CROSSING_BASE_URL(lat, lon));
  return data.json();
};
