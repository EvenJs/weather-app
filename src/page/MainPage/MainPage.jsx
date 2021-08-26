import React from 'react';

import SearchBar from '../../components/SearchBar';
import DarkModeSwitch from '../../components/DarkMode';
import Location from '../../components/Location';
import DisplayDate from '../../components/DisplayDate';
import WeatherIcon from '../../components/WeatherIcon';
import MoreInfo from '../../components/MoreInfo';
import SevenDays from '../../components/NextSevenDays';

import './MainPage.styles.scss';

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      type: ['sunny'],
      imageUrl: 'https://image.flaticon.com/icons/png/512/1146/1146869.png',
      location: 'Sydney',
      temprature: '22',
    };
  }

  render() {
    const {
      type, imageUrl, location, temprature,
    } = this.state;
    return (
      <div className="main-page">
        <div className="main-page-header">
          <SearchBar />
          <DarkModeSwitch />
        </div>
        <div className="main-page-body">
          <Location location={location} />
          <DisplayDate />
          <WeatherIcon url={imageUrl} type={type} temprature={temprature} />
          <MoreInfo />
          <SevenDays />
        </div>
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
