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
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: 'http://openweathermap.org/img/wn/',
    };
  }

  render() {
    const { imageUrl } = this.state;
    const {
      props, onDetailClick, handleSeachFieldChange, handleSubmitClick,
    } = this.props;
    // console.log(999, this.props);
    // console.log(props.detail);
    return (
      <div className="main-page">
        <div className="main-page-header">
          <SearchBar
            searchField={props.searchField}
            handleSeachFieldChange={handleSeachFieldChange}
            handleSubmitClick={handleSubmitClick}
          />
          <DarkModeSwitch />
        </div>
        <div className="main-page-body">
          <Location location={props.location} />
          <DisplayDate input={props.detail.current.time} timeShift={props.detail.time.timeShift} />
          <WeatherIcon
            baseURL={imageUrl}
            weatherIcon={props.detail.current.weatheIcon}
            type={props.detail.current.weather}
            temprature={props.detail.current.temp}
          />
          <MoreInfo onDetailClick={onDetailClick} />
          <SevenDays
            input={props.detail.daily}
            baseURL={imageUrl}
            timeShift={props.detail.time.timeShift}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
