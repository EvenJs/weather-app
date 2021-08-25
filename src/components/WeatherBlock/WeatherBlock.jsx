import React from 'react';

const getTitle = (type) => ({
  temperature: 'Temperature',
  humidity: 'Humidity',
  windSpeed: 'Wind Speed',
  windDirection: 'Wind Direction',
}[type]);

const getPrefix = (type) => ({
  temperature: '℃',
  humidity: '%',
  windSpeed: 'kms/h',
  windDirection: '',
}[type]);

const WeatherBlock = ({
  type,
  value,
}) => (
  <div>
    <h3>{getTitle(type)}</h3>
    <div>{`${value} ${getPrefix(type)}`}</div>
  </div>
);

export default WeatherBlock;
