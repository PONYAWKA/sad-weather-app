import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_BASE_URL } from "../config";

interface weather {
  main: string;
}
interface ImapElement {
  weather: weather[];
  dt_txt: string;
  main: {
    temp: number;
  };
}
export const getHourlyWeather = async (lat: number, lon: number) => {
  const data = await fetch(
    `${OPEN_WEATHER_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&cnt=8&units=metric&mode=JSON`
  ).then((data) => data.json());
  const city = data.city.name;
  const useFullData = [
    ...data.list.map((e: ImapElement) => ({
      date: e.dt_txt.split(" ")[1].slice(0, -3),
      icon: e.weather[0].main,
      temp: Math.trunc(e.main.temp),
    })),
  ];

  return { city, days: useFullData };
};
