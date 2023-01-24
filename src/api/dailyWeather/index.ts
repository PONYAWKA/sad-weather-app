import { GET_VISUAL_CROSSING_BASE_URL } from "@/api/config";
import { elementType } from "@/api/dailyWeather/interfaces";

export const getDailyWeatherAPI = async (lat: number, lon: number) => {
  const data = await fetch(GET_VISUAL_CROSSING_BASE_URL(lat, lon))
    .then((data) => data.json())
    .then((data) => data.locations[`${lat},${lon}`]);
  const dataToSend = {
    curIcon: data.currentConditions.icon,
    days: [
      ...data.values.map((e: elementType) => ({
        temp: e.temp,
        icon: e.icon,
        date: e.datetimeStr.split("T")[0],
      })),
    ],
  };
  return dataToSend;
};
