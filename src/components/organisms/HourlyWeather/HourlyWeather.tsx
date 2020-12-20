import React from 'react';
import { IWeatherSegmentItem } from '../../../types/WeatherDataContext';
import './HourlyWeather.scss';

interface IHourlyWeatherProps {
  list: IWeatherSegmentItem[] | null;
  currentWeatherIndex: number;
}

const HourlyWeather: React.FC<IHourlyWeatherProps> = (
  props: IHourlyWeatherProps,
) => {
  const { list, currentWeatherIndex } = props;
  return <div className="hourly-weather">Hourly</div>;
};

export default HourlyWeather;
