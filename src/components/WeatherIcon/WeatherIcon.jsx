import React from 'react';

// const getWeatherIconUrl = (type, id) => ({
//   id/type: ->url, imageSrouce
// })

const WeatherIcon = (url) => (
  <div>
    <img src={url} alt="weather icon" />
  </div>
);

export default WeatherIcon;
