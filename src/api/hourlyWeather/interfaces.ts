export interface weather {
  main: string;
}
export interface ImapElement {
  weather: weather[];
  dt_txt: string;
  main: {
    temp: number;
  };
}
