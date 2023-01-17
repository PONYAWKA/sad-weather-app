import {
  getBackgroundImageUrLv1,
  getBackgroundImageUrLv2,
} from "utils/getBackgroundImageUrl";

import { WeatherContent } from "@/components/WeatherContent";
import { WeatherInfoBody } from "@/components/WeatherContent/styled";
import { WeatherInfoLine } from "@/components/WeatherInfoLine";
import { WeatherBody } from "@/pages/Home/styled";

export const HomePage = () => {
  return (
    <WeatherBody image={getBackgroundImageUrLv2("rain")}>
      <WeatherInfoBody image={getBackgroundImageUrLv1("rain")}>
        <WeatherContent />
        <WeatherInfoLine />
      </WeatherInfoBody>
    </WeatherBody>
  );
};
