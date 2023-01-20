import { GET_CITY_COORD_URL } from "../config";

export const getCityCoord = async (city: string) => {
  const data = await fetch(GET_CITY_COORD_URL(city)).then((data) =>
    data.json()
  );
  const hint = data.hints[0];
  const lat = hint.point.lat;
  const lon = hint.point.lng;
  const name = hint.name;
  const newCity = hint.city;
  return { lat, lon, name, city: newCity };
};
