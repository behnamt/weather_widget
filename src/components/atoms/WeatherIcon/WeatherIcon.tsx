import React, { useEffect, useState } from 'react';
import './WeatherIcon.scss';
import WeatherSun from '../../../icons/weather-sun.svg';
import { IWeatherIcon } from '../../../types/WeatherDataContext';

interface IWeatherIconProps {
  weatherIconId: number | undefined;
}

const WeatherIcon: React.FC<IWeatherIconProps> = (props: IWeatherIconProps) => {
  const { weatherIconId } = props;
  const [weatherIcon, setWeatherIcon] = useState<IWeatherIcon | null>({
    icon: '',
    name: '',
  });

  useEffect(() => {
    console.log(weatherIconId);

    if (weatherIconId) {
      switch (weatherIconId) {
        case 500:
        case 800:
          setWeatherIcon({ icon: WeatherSun, name: 'sun' });
          break;

        default:
          setWeatherIcon({ icon: '', name: '' });
      }
    }
  }, [weatherIconId]);

  return (
    <img
      src={weatherIcon?.icon}
      alt={weatherIcon?.name}
      className={`weather-icon weather-icon__${weatherIcon?.name}`}
    />
  );
};

export default WeatherIcon;
