import React from 'react';

import './WeatherBlock.styles.scss';

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
  <div className="weatherblock">
    <h3 className="block-header">{getTitle(type)}</h3>
    <div className="block-value">{`${value} ${getPrefix(type)}`}</div>
  </div>
);

export default WeatherBlock;
