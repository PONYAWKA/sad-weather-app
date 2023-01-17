import { getBackgroundImageUrLv2 } from "utils/getBackgroundImageUrl";

import { WeatherContent } from "@/components/WeatherContent";
import { WeatherInfoLine } from "@/components/WeatherInfoLine";
import { WeatherBody, WeatherInfoBody } from "@/pages/Home/styled";

export const HomePage = () => {
  const image = getBackgroundImageUrLv2("rain");
  return (
    <WeatherBody image={image}>
      <WeatherInfoBody image={image}>
        <WeatherContent />
        <WeatherInfoLine />
      </WeatherInfoBody>
    </WeatherBody>
  );
};
