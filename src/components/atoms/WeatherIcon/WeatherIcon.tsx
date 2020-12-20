import React from 'react';
import { ReactComponent as WeatherSun } from '../../../icons/weather-sun.svg';

interface IWeatherIconProps {
  weatherIconId: number | undefined;
}

const WeatherIcon: React.FC<IWeatherIconProps> = (props: IWeatherIconProps) => {
  const { weatherIconId } = props;
  const getIcon = (): any => {
    if (weatherIconId) {
      switch (weatherIconId) {
        case 500:
        case 800:
          return <WeatherSun className="fill-sun" />;

        default:
          return null;
      }
    }
    return null;
  };

  return <>{getIcon()}</>;
};

export default WeatherIcon;
