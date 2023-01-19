export interface IHourlyWeather {
  days: day[];
}

export interface IDailyWeather {
  curIcon: string;
  days: day[];
}

export interface action {
  type: string;
  payload: IDailyWeather | IHourlyWeather;
}

interface day {
  temp: number;
  icon: string;
  date: string;
}
