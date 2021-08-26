import React from 'react';
import WeatherBlock from '../WeatherBlock';

import './Detail.styles.scss';

const Detail = () => (
  <div className="detail">
    <WeatherBlock type="temperature" value="22" />
    <WeatherBlock type="temperature" value="22" />
    <WeatherBlock type="temperature" value="22" />
    <WeatherBlock type="temperature" value="22" />
  </div>
);

export default Detail;
