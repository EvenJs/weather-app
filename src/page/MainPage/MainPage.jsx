import React from 'react';

import SearchBar from '../../components/SearchBar';
import DarkModeSwitch from '../../components/DarkMode';
import Location from '../../components/Location';
import DisplayDate from '../../components/DisplayDate';
import WeatherIcon from '../../components/WeatherIcon';
import MoreInfo from '../../components/MoreInfo';
// import SevenDays from '../../components/NextSevenDays';

import './MainPage.styles.scss';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // type: ['sunny'],
      imageUrl: 'https://image.flaticon.com/icons/png/512/1146/1146869.png',
    };

    // this.handleSeachFieldChange = this.handleSeachFieldChange.bind(this);
    // this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }
  /*
  handleSeachFieldChange(event) {
    const { value } = event.target;

    this.setState((prevState) => (
      {
        ...prevState,
        searchField: value,
      }
    ));
    // console.log(1 {location});
  }

  handleSubmitClick(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      ...prevState,
      location: prevState.searchField,
    }));
  }
*/

  render() {
    const { imageUrl } = this.state;
    const {
      props, onDetailClick, handleSeachFieldChange, handleSubmitClick,
    } = this.props;
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
          <WeatherIcon url={imageUrl} type={props.type} temprature={props.temperature} />
          <MoreInfo onDetailClick={onDetailClick} />

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
