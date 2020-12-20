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
      <div className="weather-info__date">
        <span className="weather-info__date-day">{getDayOfWeek(time)}</span>
        <span className="weather-info__date-month">
          {`${getDay(time)}. ${getMonth(time)}`}
        </span>
      </div>
    </div>
  );
};

export default WeatherInfo;
