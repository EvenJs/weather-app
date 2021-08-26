import React from 'react';
import EachHour from '../EachHour';

import './HourList.styles.scss';

const WeatherInHour = () => (
  <div className="wrapper">
    <EachHour hour="18:00" temperature="20" />
    <EachHour />
    <EachHour />
    <EachHour />
    <EachHour />
    <EachHour />
    <EachHour />
    <EachHour />
  </div>
);

export default WeatherInHour;
