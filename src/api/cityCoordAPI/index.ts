import { GET_CITY_COORD_URL } from "@/api/config";

export const getCityCoord = async (city: string) => {
  const data = await fetch(GET_CITY_COORD_URL(city)).then((data) =>
    data.json()
  );

  const hint = data.hits[0];
  const lat = hint.point.lat;
  const lon = hint.point.lng;
  const name = hint.country;
  const newCity = hint.city;
  return { lat, lon, name, city: newCity };
};
