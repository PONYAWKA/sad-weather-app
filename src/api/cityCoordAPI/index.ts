import { GET_CITY_COORD_BY_NAME_URL, GET_CITY_COORD_URL } from "@/api/config";

export const getCityCoord = async (Ilat: number, Ilon: number) => {
  const data = await fetch(GET_CITY_COORD_URL(Ilat, Ilon)).then((data) =>
    data.json()
  );
  const hint = data.hits[0];
  const name = hint.country;
  const newCity = hint.city;
  return { name, city: newCity };
};

export const getCityCoordByName = async (name: string) => {
  const data = await fetch(GET_CITY_COORD_BY_NAME_URL(name)).then((data) =>
    data.json()
  );
  const hint = data.hits[0];
  const city = hint.city ?? hint.name;
  const lat = hint.point.lat;
  const lon = hint.point.lng;
  return { lat, lon, newCity: city };
};
