import React from 'react';
import { IWeatherSegmentItem } from '../../../types/WeatherDataContext';
import { getHour } from '../../../utils/time';
import WeatherIcon from '../../atoms/WeatherIcon/WeatherIcon';
import './HourlyWeather.scss';

interface IHourlyWeatherProps {
  list: IWeatherSegmentItem[] | null;
  currentWeatherIndex: number;
}

const HourlyWeather: React.FC<IHourlyWeatherProps> = (
  props: IHourlyWeatherProps,
) => {
  const { list, currentWeatherIndex } = props;
  return (
    <div className="hourly-weather">
      {list?.map((item, index) => (
        <div
          key={item.dt}
          className={`hourly-weather__item ${
            index === currentWeatherIndex
              ? 'hourly-weather__item--selected'
              : ''
          }`}
        >
          <span className="hourly-weather__item-hour">{getHour(item.dt)}</span>
          <WeatherIcon weatherIconId={item.weather?.[0]?.id} />
          <span className="hourly-weather__item-temp">{`${item.main.temp}°`}</span>
        </div>
      ))}
    </div>
  );
};

export default HourlyWeather;
