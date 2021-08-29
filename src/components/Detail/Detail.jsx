import React from 'react';
import WeatherBlock from '../WeatherBlock';

import './Detail.styles.scss';

const Detail = ({ input }) => (
  <div className="detail">
    {input.map((data) => (
    // console.log(548, data.value)
      <WeatherBlock type={data.type} value={data.value} />
    ))}
  </div>
);

export default Detail;
