import React from 'react';
// import { Switch, Route } from 'react-router';

import MainPage from '../page/MainPage/MainPage';
import DetailPage from '../page/DetailPage/DetailPage';

import './WeatherApp.styles.scss';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
      location: 'Sydney',
      imgageUrl: '',
      temperature: '',
      searchField: '',
      sevenDaysData: [
        {
          week: 'Wed',
          url: 'https://image.flaticon.com/icons/png/512/1146/1146869.png',
          temperature: '22',
        },
        {
          week: 'Wed',
          url: 'https://image.flaticon.com/icons/png/512/1146/1146869.png',
          temperature: '22',
        },
      ],
    };

    this.handleSeachFieldChange = this.handleSeachFieldChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleShowDetail = this.handleShowDetail.bind(this);
  }

  handleShowDetail() {
    this.setState((prevState) => (
      {
        ...prevState,
        showDeails: !prevState.showDeails,
      }
    ));
  }

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

  render() {
    const { showDeails } = this.state;

    return (
      <div className="weather-app">
        {/* <Switch>
          <Route exact path="/" component={<MainPage />} />
          <Route path="/details" component={<DetailPage />} />
        </Switch> */}
        {!showDeails ? (
          <MainPage
            onDetailClick={this.handleShowDetail}
            props={this.state}
            handleSeachFieldChange={this.handleSeachFieldChange}
            handleSubmitClick={this.handleSubmitClick}
          />
        ) : (
          <DetailPage onDetailClick={this.handleShowDetail} props={this.state} />
        )}
      </div>
    );
  }
}

export default WeatherApp;
