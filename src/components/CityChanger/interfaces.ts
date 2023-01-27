export interface IPlace {
  geometry: { location: { lat: () => number; lng: () => number } };
  formatted_address: string;
  name?: string;
}
export interface IEnterEvent {
  key: string;
  preventDefault: () => void;
}
