export interface IWeatherIconMapping {
  [key: number]: string;
}

export interface IWeatherIcon {
  icon: string;
  name: string;
}

export interface IWeatherSegmentMain {
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface IWeatherSegmentWeather {
  id: number;
  description: string;
  icon: string;
}

export interface IWeatherSegmentItem {
  dt: number;
  dt_txt: string;
  main: IWeatherSegmentMain;
  weather: IWeatherSegmentWeather[];
}

export interface IOpenWeatherMap {
  city: { name: string };
  list: IWeatherSegmentItem[];
}

export interface IWeatherDataContext {
  data: IOpenWeatherMap | undefined;
  isPending: boolean;
  error: Error | undefined;
}
