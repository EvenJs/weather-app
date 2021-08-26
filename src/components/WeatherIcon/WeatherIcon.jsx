import React from 'react';

import './WeatherIcon.styles.scss';

// const getWeatherIconUrl = (type, id) => ({
//   id/type: ->url, imageSrouce
// })

const WeatherIcon = ({ url, type, temprature }) => (
  <div>
    <div className="weather-wrapper">
      <img className="weather-icon" src={url} alt="weather icon" />
      <h3 className="weather-type">{type}</h3>
    </div>
    <div className="weather-temprature">
      { temprature }
      ℃
    </div>
  </div>
);

export default WeatherIcon;
