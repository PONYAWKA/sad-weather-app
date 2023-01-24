export const OPEN_WEATHER_API_KEY = "f75c50e0325316c5204c1e70eacf927b";
export const OPEN_WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5";
export const GET_OPEN_WEATHER_IMAGE_API = (imgName: string) =>
  `http://openweathermap.org/img/wn/${imgName}@2x.png`;
export const GET_VISUAL_CROSSING_BASE_URL = (lat: number, lon: number) =>
  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${lat},${lon}&aggregateHours=24&unitGroup=metric&contentType=json&key=4XQ6TJ7582MTMXBS5BK79F4BQ&forecastDays=6&iconSet=icons1`;
export const GET_CITY_COORD_URL = (lat: number, lon: number) =>
  `https://graphhopper.com/api/1/geocode?key=6b5fc174-542d-47c1-af94-b08ace00346d&point=${lat},${lon}&limit=2&reverse=true`;
