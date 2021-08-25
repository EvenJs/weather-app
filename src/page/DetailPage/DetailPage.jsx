import React from 'react';

import Time from '../../components/Time/Time';
import GoBack from '../../components/GoBack/GoBack';
import DarkModeSwitch from '../../components/DarkMode/DarkModeSwitch';
import WeatherBlock from '../../components/WeatherBlock';
import WeatherIcon from '../../components/WeatherIcon';

import './DetailPage.styles.scss';

const DetailPage = () => (
  <div>
    <div className="detail-page-header">
      <GoBack />
      <DarkModeSwitch />
    </div>
    <Time />
    <WeatherIcon url="../../asset/sunny.png" />
    <WeatherBlock type="temperature" value="14" />
  </div>
);

export default DetailPage;
