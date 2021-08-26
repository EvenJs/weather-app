import React from 'react';
import { Switch, Route } from 'react-router';

import MainPage from '../page/MainPage/MainPage';
import DetailPage from '../page/DetailPage/DetailPage';

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
      <div className="weather-app">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/details" component={DetailPage} />
        </Switch>
      </div>
    );
  }
}

export default WeatherApp;
