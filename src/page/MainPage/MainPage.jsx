import React from 'react';

import SearchBar from '../../components/SearchBar';
import DarkModeSwitch from '../../components/DarkMode';
import Location from '../../components/Location';
import Time from '../../components/Time';
import Weather from '../../components/Weather/Weather';
import MoreInfo from '../../components/MoreInfo';
import SevenDays from '../../components/NextSevenDays';

import './MainPage.styles.scss';

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      tempreature: 123,
      imageUrl: 'http://openweathermap.org/img/wn/10d@2x.png',
      location: 'Sydney',
    };
  }

  render() {
    const { tempreature, imageUrl, location } = this.state;
    return (
      <div className="main-page">
        <div className="main-page-header">
          <SearchBar />
          <DarkModeSwitch />
        </div>
        <Location location={location} />
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
