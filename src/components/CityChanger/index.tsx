import { RefObject, SyntheticEvent, useEffect, useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { shallowEqual, useDispatch } from "react-redux";

import { IEnterEvent, IPlace } from "@/components/CityChanger/interfaces";
import {
  CityChangerBody,
  CityContainer,
  CityTitle,
} from "@/components/CityChanger/styled";
import { useAppSelector } from "@/store";
import {
  getWeather,
  setCityName,
  setPosition,
  setPositionByName,
} from "@/store/actions";
import { statusSelector } from "@/store/selectors";
import { getCityName } from "@/utils/getCityName";

export const CityChanger = () => {
  const dispatch = useDispatch();

  const { city } = useAppSelector(statusSelector, shallowEqual);
  const [cityName, setName] = useState(city);

  const EnterHandler = (e: IEnterEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", EnterHandler);
    return () => document.removeEventListener("keypress", EnterHandler);
  }, []);

  const onChangeHandler = (e: SyntheticEvent) => {
    setName((e.target as HTMLInputElement).value);
  };

  const autoCompleteHandler = (place: IPlace) => {
    if (place.name) {
      dispatch(setCityName({ city: getCityName(place.name) }));
      dispatch(setPositionByName());
      dispatch(getWeather());
    } else {
      const { lat, lng } = place.geometry.location;
      dispatch(setPosition({ lat: lat(), lon: lng() }));
      dispatch(setCityName({ city: getCityName(place.formatted_address) }));
      dispatch(getWeather());
    }
  };

  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    onPlaceSelected: autoCompleteHandler,
  });

  const onFocusHandler = () => {
    setName("");
  };

  return (
    <CityChangerBody>
      <CityContainer>
        <CityTitle
          onFocus={onFocusHandler}
          value={cityName}
          onChange={onChangeHandler}
          ref={ref as unknown as RefObject<HTMLTextAreaElement>}
          placeholder="City"
          rows={2}
          data-cy="Text-Input"
        />
      </CityContainer>
    </CityChangerBody>
  );
};
