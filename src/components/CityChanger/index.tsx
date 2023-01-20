import { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  CityChangerBody,
  CityContainer,
  CityTitle,
  ObjectName,
} from "@/components/CityChanger/styled";
import { useAppSelector } from "@/store";
import { setCity } from "@/store/actions";

export const CityChanger = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("keypress", EnterPressHandler);
    return () => document.removeEventListener("keypress", EnterPressHandler);
  });

  const { city, name } = useAppSelector(({ statusReducer }) => statusReducer);
  const [cityName, setCityName] = useState(city);

  const onChangeHandler = (e: SyntheticEvent) => {
    setCityName((e.target as HTMLInputElement).value);
  };

  const onConfirmHandler = () => {
    if (city !== cityName) dispatch(setCity(cityName));
  };

  const EnterPressHandler = (e: { key: string }) =>
    e.key === "Enter" ? onConfirmHandler() : null;
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
