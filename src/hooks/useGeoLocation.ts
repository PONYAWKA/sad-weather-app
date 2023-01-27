import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "@/store";
import { getWeather, initPosition, setCity } from "@/store/actions";
import { statusSelector } from "@/store/selectors";

export const useGeoLocation = () => {
  const { city } = useAppSelector(statusSelector);
  const [{ lat, lon }, setPos] = useState({ lat: 0, lon: 0 });

  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setPos({
          lat: latitude,
          lon: longitude,
        });
        dispatch(initPosition({ lat, lon }));
        dispatch(getWeather());
        dispatch(setCity());
      },
      () => {
        if (!city)
          alert(
            "Не удалось определить координаты, разрешите геолокацию для работы приложения"
          );
      }
    );
  }, [lat, lon]);
};
