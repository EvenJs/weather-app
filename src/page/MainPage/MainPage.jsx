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
      // type: ['sunny'],
      imageUrl: 'https://image.flaticon.com/icons/png/512/1146/1146869.png',
    };
  }

  render() {
    const { imageUrl } = this.state;
    const {
      props, onDetailClick, handleSeachFieldChange, handleSubmitClick,
    } = this.props;
    // const { city, current } = detail;
    console.log(66, props.detail);
    // const { onDetailClick } = this.props;
    // console.log(999, this.props);
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
          <DisplayDate />
          <WeatherIcon
            url={imageUrl}
            type={props.detail.current.weather}
            temprature={props.detail.current.temp}
          />
          <MoreInfo onDetailClick={onDetailClick} />
          <SevenDays input={props.detail.daily} />
        </div>
      </div>
    );
  }
}

export default MainPage;
