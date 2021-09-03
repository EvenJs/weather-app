import React from 'react';
import EachHour from '../EachHour';

import './HourList.styles.scss';

const WeatherInHour = ({ input }) => (
  <div className="wrapper">
    {
      input.map((data) => (
        <EachHour hour={data.date} temperature={data.temperature} />
      ))
    }

  </div>
);

export default WeatherInHour;
