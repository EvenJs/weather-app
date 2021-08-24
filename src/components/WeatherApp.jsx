import React from 'react';

import SearchBar from './search-bar/SearchBar';
import Time from './time/Time';
import Weather from './weather/Weather';
import MoreInfo from './more-info/MoreInfo';
import SevenDays from './next-seven-days/SevenDays';

import './WeatherApp.styles.scss';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
    };
  }

  handleShowDetail() {
    this.setState((prevState) => (
      { ...prevState, showDeails: !prevState.showDeails }));
  }

  render() {
    return (
      <div className="weatherApp">
        <SearchBar />
        <Time />
        <Weather />
        <MoreInfo />
        <SevenDays />
      </div>
    );
  }
}

export default WeatherApp;
