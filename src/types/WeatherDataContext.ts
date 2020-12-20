export interface IWeatherSegmentMain{
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface IWeatherSegmentWeather {
  id: number;
  description: string;
}

export interface IWeatherSegmentItem {
  dt: number;
  dt_txt: string;
  main: IWeatherSegmentMain;
  weather: IWeatherSegmentWeather[];
}

export interface IOpenWeatherMap {
  city: string;
  list: IWeatherSegmentItem[];
}

export interface IWeatherDataContext {
  data: IOpenWeatherMap | undefined;
  isPending: boolean;
  error: Error | undefined;
}