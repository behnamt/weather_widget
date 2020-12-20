import React from 'react';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import './App.scss';

const App = () => {
  return (
    <div className="container app">
      <main className="app__main">
        <WeatherWidget />
      </main>
    </div>
  );
};

export default App;
