import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useEffect,
} from 'react';
import { useFetch } from 'react-async';
import {
  IOpenWeatherMap,
  IWeatherDataContext,
} from '../types/WeatherDataContext';
import { convertKelvinToCelsius } from '../utils/temperature';

const weatherDataContext = createContext<IWeatherDataContext>({
  isPending: true,
  data: undefined,
  error: undefined,
});

const useWeatherDataContext = (): IWeatherDataContext =>
  useContext(weatherDataContext);

const useWeatherDataContextProvider = (): IWeatherDataContext => {
  const [data, setData] = useState<IOpenWeatherMap | undefined>();

  const headers = {
    Accept: 'application/json',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  };

  const { isPending, error, data: initialData } = useFetch<IOpenWeatherMap>(
    'https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22',
    { method: 'GET', headers },
  );

  useEffect(() => {
    if (initialData) {
      const list = initialData?.list.map((item) => ({
        ...item,
        main: {
          temp: convertKelvinToCelsius(item.main.temp),
          temp_max: convertKelvinToCelsius(item.main.temp_max),
          temp_min: convertKelvinToCelsius(item.main.temp_min),
        },
      }));
      setData({ list, city: initialData.city });
    }
  }, [initialData]);

  return {
    isPending,
    data,
    error,
  };
};

const WeatherDataContextProvider = ({
  children,
}: PropsWithChildren<any>): React.ReactElement => {
  const values = useWeatherDataContextProvider();

  return (
    <weatherDataContext.Provider value={values}>
      {children}
    </weatherDataContext.Provider>
  );
};

export { WeatherDataContextProvider, useWeatherDataContext };
