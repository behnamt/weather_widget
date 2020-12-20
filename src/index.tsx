import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/organisms/App/App';
import { WeatherDataContextProvider } from './contexts/WeatherData';

ReactDOM.render(
  <React.StrictMode>
    <WeatherDataContextProvider>
      <App />
    </WeatherDataContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
