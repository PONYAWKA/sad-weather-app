import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";

import {
  CityChangerBody,
  CityContainer,
  CityTitle,
  ObjectName,
} from "@/components/CityChanger/styled";
import { useAppSelector } from "@/store";
import { setCity, setPosition } from "@/store/actions";

export const CityChanger = () => {
  const dispatch = useDispatch();

  const { city, name } = useAppSelector(({ statusReducer }) => statusReducer);
  const [cityName, setCityName] = useState(city);
  const onChangeHandler = (e: SyntheticEvent) => {
    setCityName((e.target as HTMLInputElement).value);
  };
  const onConfirmHandler = () => {
    dispatch(setCity(cityName));
  };
  return (
    <CityChangerBody>
      <CityContainer>
        <CityTitle
          onBlur={onConfirmHandler}
          value={cityName}
          onChange={onChangeHandler}
        />
        <ObjectName>{name}</ObjectName>
      </CityContainer>
    </CityChangerBody>
  );
};
