export const OPEN_WEATHER_API_KEY = "f75c50e0325316c5204c1e70eacf927b";
export const OPEN_WEATHER_BASE_URL = "api.openweathermap.org/data/2.5";
export const GET_OPEN_WEATHER_IMAGE_API = (imgName: string) =>
  `http://openweathermap.org/img/wn/${imgName}@2x.png`;
export const GET_VISUAL_CROSSING_BASE_URL = (lat: number, lon: number) =>
  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${lat},${lon}&aggregateHours=24&unitGroup=us&contentType=json&key=4XQ6TJ7582MTMXBS5BK79F4BQ&forecastDays=7&iconSet=icons1`;
