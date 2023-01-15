export const getDailyWeather = (lat: number, lon: number) => {
  const data = fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/1,1?unitGroup=metric&key=4XQ6TJ7582MTMXBS5BK79F4BQ"
  );
};
