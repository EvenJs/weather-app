import React from 'react';

import './WeatherBlock.styles.scss';

const getTitle = (type) => ({
  temp_max: 'Temperature Max',
  temp_min: 'Temperature Min',
  humidity: 'Humidity',
  wind_speed: 'Wind Speed',
}[type]);

const getPrefix = (type) => ({
  temp_max: '℃',
  temp_min: '℃',
  humidity: '%',
  wind_speed: 'kms/h',
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
