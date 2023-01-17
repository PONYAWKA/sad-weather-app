import clear from "@/assets/clear.png";
import cloud from "@/assets/cloud.png";
import fog from "@/assets/fog.png";
import rain from "@/assets/rain.png";
import snow from "@/assets/snow.png";
import thunderStorm from "@/assets/thunderStorm.png";

export const getIcon = (name: string) => {
  switch (name.toLocaleLowerCase()) {
    case "clear":
    case "clear-day":
    case "clear-night":
      return clear;
    case "snow":
      return snow;
    case "thunderstorm":
      return thunderStorm;
    case "drizzle":
    case "rain":
      return rain;
    case "clouds":
    case "cloudy":
    case "partly-cloudy-day":
    case "partly-cloudy-night":
      return cloud;
    default:
      return fog;
  }
};
