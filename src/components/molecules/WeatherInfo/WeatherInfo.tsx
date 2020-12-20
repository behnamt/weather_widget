import React from 'react';
import { getDay, getDayOfWeek, getMonth } from '../../../utils/time';

interface IWeatherInfoProps {
  city: string;
  time: number | undefined;
}

const WeatherInfo: React.FC<IWeatherInfoProps> = (props: IWeatherInfoProps) => {
  const { city, time } = props;

  return (
    <div className="weather-info">
      <span className="weather-info__city">{city}</span>
      <span className="weather-info__day-of-week">{getDayOfWeek(time)}</span>
      <span className="weather-info__day-of-month">
        {`${getDay(time)}. ${getMonth(time)}`}
      </span>
    </div>
  );
};

export default WeatherInfo;
