import { GET_CITY_COORD_URL } from "@/api/config";

export const getCityCoord = async (Ilat: number, Ilon: number) => {
  const data = await fetch(GET_CITY_COORD_URL(Ilat, Ilon)).then((data) =>
    data.json()
  );
  const hint = data.hits[0];
  const name = hint.country;
  const newCity = hint.city;
  return { name, city: newCity };
};
