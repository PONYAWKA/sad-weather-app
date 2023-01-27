import { shallowEqual } from "react-redux";

import { Calendar } from "@/components/Calendar";
import { Loader } from "@/components/Loader";
import { WeatherInfoLine } from "@/components/WeatherInfoLine";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import { WeatherBody, WeatherInfoBody } from "@/pages/Home/styled";
import { useAppSelector } from "@/store";
import { statusSelector } from "@/store/selectors";

export const HomePage = () => {
  const { url, isLoading } = useAppSelector(statusSelector, shallowEqual);
  useGeoLocation();
  if (isLoading) return <Loader />;

  return (
    <WeatherBody image={url}>
      <WeatherInfoBody image={url}>
        <Calendar />
        <WeatherInfoLine />
      </WeatherInfoBody>
    </WeatherBody>
  );
};
