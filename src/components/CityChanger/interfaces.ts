export interface IPlace {
  geometry: { location: { lat: () => number; lng: () => number } };
  formatted_address: string;
}
