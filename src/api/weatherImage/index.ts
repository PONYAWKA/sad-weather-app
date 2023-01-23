import { GET_OPEN_WEATHER_IMAGE_API } from "../config";

export const getWeatherImage = async (imgName: string) => {
  const data = await fetch(GET_OPEN_WEATHER_IMAGE_API(imgName)).then((data) =>
    data.json()
  );
  return data;
};
