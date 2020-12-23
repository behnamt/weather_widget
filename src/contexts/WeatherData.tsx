import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useCallback,
} from 'react';
import { AsyncState, useAsync } from 'react-async';
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

  const { isPending, error }: AsyncState<any> = useAsync({
    promiseFn: useCallback(
      () =>
        fetch(
          '/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22',
        ).then((response) => response.json()),
      [],
    ),
    onResolve: (initialData: IOpenWeatherMap) => {
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
    },
  });

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
