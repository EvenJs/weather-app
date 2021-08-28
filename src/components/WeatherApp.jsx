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
      searchField: '',
      location: '',
    };

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

  render() {
    const { showDeails } = this.state;

    return (
      <div className="weather-app">
        {/* <Switch>
          <Route exact path="/" component={<MainPage />} />
          <Route path="/details" component={<DetailPage />} />
        </Switch> */}
        {!showDeails ? (
          <MainPage onDetailClick={this.handleShowDetail} />
        ) : (
          <DetailPage onDetailClick={this.handleShowDetail} />
        )}
      </div>
    );
  }
}

export default WeatherApp;
