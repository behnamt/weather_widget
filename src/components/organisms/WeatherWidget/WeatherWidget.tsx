import React from 'react';
import { useWeatherDataContext } from '../../../contexts/WeatherData';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Error from '../../molecules/Error/Error';
import LoadingIndicator from '../../molecules/LoadingIndicator/LoadingIndicator';
import './WeatherWidget.scss';
import HourlyWeather from '../HourlyWeather/HourlyWeather';

const WeatherWidget = () => {
  const { data, isPending, error } = useWeatherDataContext();
  return (
    <div className="weather-widget">
      {data && (
        <>
          <CurrentWeather weather={null} />
          <HourlyWeather list={null} />
        </>
      )}
      {isPending && <LoadingIndicator />}
      {!!error && <Error error={error} />}
    </div>
  );
};

export default WeatherWidget;
