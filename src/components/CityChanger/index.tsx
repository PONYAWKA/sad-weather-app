import { RefObject, SyntheticEvent, useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { shallowEqual, useDispatch } from "react-redux";

import { IPlace } from "@/components/CityChanger/interfaces";
import {
  CityChangerBody,
  CityContainer,
  CityTitle,
} from "@/components/CityChanger/styled";
import { useAppSelector } from "@/store";
import { getWeather, setCity, setCityName, setPosition } from "@/store/actions";
import { statusSelector } from "@/store/selectors";

export const CityChanger = () => {
  const dispatch = useDispatch();

  const { city } = useAppSelector(statusSelector, shallowEqual);
  const [cityName, setName] = useState(city);

  const onChangeHandler = (e: SyntheticEvent) => {
    setName((e.target as HTMLInputElement).value);
  };

  const autoCompleteHandler = (place: IPlace) => {
    const { lat, lng } = place.geometry.location;
    console.log(place);

    dispatch(setPosition({ lat: lat(), lon: lng() }));
    dispatch(setCityName({ city: place.formatted_address }));
    dispatch(getWeather());
  };

  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyC4WRUMHGpRaDxwWqWNCabv45EWW7K7PmY",
    onPlaceSelected: autoCompleteHandler,
  });

  return (
    <CityChangerBody>
      <CityContainer>
        <CityTitle
          value={cityName}
          onChange={onChangeHandler}
          ref={ref as unknown as RefObject<HTMLInputElement>}
        />
      </CityContainer>
    </CityChangerBody>
  );
};
