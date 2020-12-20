import React from 'react';
import { IWeatherSegmentItem } from '../../../types/WeatherDataContext';

interface IWeatherStatusProps {
  status: IWeatherSegmentItem | null;
}
const WeatherStatus: React.FC<IWeatherStatusProps> = (
  props: IWeatherStatusProps,
) => {
  const { status } = props;
  return (
    <div className="weather-status">
      <span className="weather-status__description">
        {status?.weather?.[0]?.description}
      </span>
      <span className="weather-status__max-min">{`${status?.main.temp_min}° / ${status?.main.temp_max}°`}</span>
      <span className="weather-status__temp">{`${status?.main.temp}°`}</span>
    </div>
  );
};

export default WeatherStatus;
