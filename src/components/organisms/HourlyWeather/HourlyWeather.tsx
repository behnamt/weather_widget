import React from 'react';
import { IWeatherSegmentItem } from '../../../types/WeatherDataContext';
import { getHour } from '../../../utils/time';
import WeatherIcon from '../../atoms/WeatherIcon/WeatherIcon';

interface IHourlyWeatherProps {
  list: IWeatherSegmentItem[] | null;
  currentWeatherIndex: number;
  onHourSelect: (time: number) => void;
}

const HourlyWeather: React.FC<IHourlyWeatherProps> = (
  props: IHourlyWeatherProps,
) => {
  const { list, currentWeatherIndex, onHourSelect } = props;

  return (
    <div className="hourly-weather">
      {list?.map((item, index) => (
        <div
          key={item.dt}
          role="button"
          className={`hourly-weather__item ${
            index === currentWeatherIndex
              ? 'hourly-weather__item--selected'
              : ''
          }`}
          onClick={() => onHourSelect(item.dt)}
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
