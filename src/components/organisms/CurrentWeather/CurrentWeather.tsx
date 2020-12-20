import React from 'react';
import { IWeatherSegmentItem } from '../../../types/WeatherDataContext';
import WeatherIcon from '../../atoms/WeatherIcon/WeatherIcon';
import WeatherInfo from '../../molecules/WeatherInfo/WeatherInfo';
import WeatherStatus from '../../molecules/WeatherStatus/WeatherStatus';

interface ICurrentWeatherProps {
  city: string;
  status: IWeatherSegmentItem | null;
}

const CurrentWeather: React.FC<ICurrentWeatherProps> = (
  props: ICurrentWeatherProps,
) => {
  const { status, city } = props;

  return (
    <div className="current-weather">
      <div className="current-weather__icon">
        <WeatherIcon weatherIconId={status?.weather?.[0]?.id} />
      </div>
      <div className="current-weather__status">
        <WeatherStatus status={status} />
      </div>
      <div className="current-weather__general-info">
        <WeatherInfo city={city} time={status?.dt} />
      </div>
    </div>
  );
};

export default CurrentWeather;
