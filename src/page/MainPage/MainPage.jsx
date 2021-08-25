import React from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import DarkModeSwitch from '../../components/DarkMode/DarkModeSwitch';
import Time from '../../components/Time/Time';
import Weather from '../../components/weather/Weather';
import MoreInfo from '../../components/MoreInfo/MoreInfo';
import SevenDays from '../../components/NextSevenDays/SevenDays';

import './MainPage.styles.scss';

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      tempreature: 123,
      imageUrl: 'https://www.pngitem.com/middle/JxxJR_simple-weather-icons-sunny-sunny-weather-icon-png/',
    };
  }

  render() {
    const { tempreature, imageUrl } = this.state;
    return (
      <div className="main-page">
        <div className="main-page-header">
          <SearchBar />
          <DarkModeSwitch />
        </div>
        <Time />
        <Weather imageUrl={imageUrl} tempreature={tempreature} />
        <MoreInfo />
        <SevenDays />
      </div>
    );
  }
}

/*
const MainPage = () => (
  <div className="main-page">
    <SearchBar />
    <Time />
    <Weather />
    <MoreInfo />
    <SevenDays />
  </div>
);
*/
export default MainPage;
