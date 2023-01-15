import { GET_VISUAL_CROSSING_BASE_URL } from "api/config";

interface elemetType {
  temp: number;
  icon: string;
  datetimeStr: string;
}
export const getDailyWeatherAPI = async (lat: number, lon: number) => {
  const data = await fetch(GET_VISUAL_CROSSING_BASE_URL(lat, lon))
    .then((data) => data.json())
    .then((data) => data.locations[`${lat},${lon}`]);
  const dataToSend = {
    curIcon: data.currentConditions.icon,
    curTemp: data.currentConditions.temp,
    days: data.values.map((e: elemetType) => ({
      temp: e.temp,
      icon: e.icon,
      time: e.datetimeStr.split("T")[0],
    })),
  };
  return dataToSend;
};
