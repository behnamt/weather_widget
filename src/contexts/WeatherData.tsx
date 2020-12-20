import React, { createContext, useContext, PropsWithChildren } from 'react';
import { useFetch } from 'react-async';
import {
  IOpenWeatherMap,
  IWeatherDataContext,
} from '../types/WeatherDataContext';

const weatherDataContext = createContext<IWeatherDataContext>({
  isPending: true,
  data: undefined,
  error: undefined,
});

const useWeatherDataContext = (): IWeatherDataContext => useContext(weatherDataContext);

const useWeatherDataContextProvider = (): IWeatherDataContext => {
  const headers = {
    Accept: 'application/json',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  };

  const { isPending, error, data } = useFetch<IOpenWeatherMap>(
    'https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22',
    { method: 'GET', headers },
  );

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
