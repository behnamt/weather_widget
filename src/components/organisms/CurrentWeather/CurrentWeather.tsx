import React from 'react';
import { IWeatherSegmentItem } from '../../../types/WeatherDataContext';
import './CurrentWeather.scss';

interface ICurrentWeatherProps {
  weather: IWeatherSegmentItem | null;
}

const CurrentWeather: React.FC<ICurrentWeatherProps> = (
  props: ICurrentWeatherProps,
) => {
  const { weather } = props;
  return <div className="current-weather">Current</div>;
};

export default CurrentWeather;
