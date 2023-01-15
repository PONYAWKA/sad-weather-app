import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_BASE_URL } from "../config";

export const getHourlyWeather = async (lat: number, lon: number) => {
  const data = await fetch(
    `${OPEN_WEATHER_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`
  );
  return data.json();
};
