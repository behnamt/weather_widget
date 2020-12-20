import React from 'react';
import { IWeatherSegmentItem } from '../../../types/WeatherDataContext';
import './HourlyWeather.scss';

interface IHourlyWeatherProps {
  list: IWeatherSegmentItem[] | null;
}

const HourlyWeather: React.FC<IHourlyWeatherProps> = (
  props: IHourlyWeatherProps,
) => {
  const { list } = props;
  return <div className="hourly-weather">Hourly</div>;
};

export default HourlyWeather;
