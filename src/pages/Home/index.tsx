import { WeatherContent } from "components/WeatherContent";
import { WeatherInfoBody } from "components/WeatherContent/styled";
import { WeatherInfoLine } from "components/WeatherInfoLine";
import { WeatherBody } from "pages/Home/styled";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initPosinion } from "store/actions";
import {
  getBackgroundImageUrlv1,
  getBackgroundImageUrlv2,
} from "utils/getBackgroundImageUrl";

export const HomePage = () => {
  return (
    <WeatherBody image={getBackgroundImageUrlv2("rain")}>
      <WeatherInfoBody image={getBackgroundImageUrlv1("rain")}>
        <WeatherContent />
        <WeatherInfoLine />
      </WeatherInfoBody>
    </WeatherBody>
  );
};
