import React, { useEffect, useState } from 'react';
import { useWeatherDataContext } from '../../../contexts/WeatherData';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Error from '../../molecules/Error/Error';
import LoadingIndicator from '../../molecules/LoadingIndicator/LoadingIndicator';
import HourlyWeather from '../HourlyWeather/HourlyWeather';
import { IWeatherSegmentItem } from '../../../types/WeatherDataContext';

const WeatherWidget = () => {
  const { data, isPending, error } = useWeatherDataContext();

  const [currentWeatherIndex, setCurrentWeatherIndex] = useState<number>(-1);
  const [city, setCity] = useState<string>('');
  const [hourlyList, setHourlyList] = useState<IWeatherSegmentItem[]>([]);
  const [
    currentWeather,
    setCurrentWeather,
  ] = useState<IWeatherSegmentItem | null>(null);

  useEffect(() => {
    if (data) {
      const hourIndex = Math.floor(Math.random() * data.list.length);

      setCity(data.city.name);
      setHourlyList(data.list);
      setCurrentWeatherIndex(hourIndex);
      setCurrentWeather(data.list[hourIndex]);
    }
  }, [data]);

  const onHourSelectHandle = (time: number) => {
    const itemIndex = data?.list.findIndex((item) => item.dt === time);
    if (data && itemIndex && itemIndex > -1) {
      setCurrentWeatherIndex(itemIndex);
      setCurrentWeather(data.list[itemIndex]);
    }
  };

  return (
    <div className="weather-widget">
      {data && (
        <>
          <CurrentWeather status={currentWeather} city={city} />
          <HourlyWeather
            list={hourlyList}
            currentWeatherIndex={currentWeatherIndex}
            onHourSelect={onHourSelectHandle}
          />
        </>
      )}
      {isPending && <LoadingIndicator />}
      {!!error && <Error error={error} />}
    </div>
  );
};

export default WeatherWidget;
