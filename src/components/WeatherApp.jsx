import React from 'react';
// import { Switch, Route } from 'react-router';
import axios from 'axios';

import MainPage from '../page/MainPage/MainPage';
import DetailPage from '../page/DetailPage/DetailPage';

import './WeatherApp.styles.scss';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
      location: 'Sydney',

    };

    this.handleSeachFieldChange = this.handleSeachFieldChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleShowDetail = this.handleShowDetail.bind(this);
  }

  componentDidMount() {
    this.collectCurrentWeatherData();
    /*
    const location = 'sydney';
    // fetch('https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=de69afd1f26877e34f47989397ff77a3&units=metric')
    axios.get(`http://localhost:9000/api/weather/${location}`)
    // fetch(`http://localhost:9000/api/weather/${location}`)
      // .then((res) => console.log(123, res.data.data))
      .then((response) => response.data.data)
      .then((result) => {
        console.log(222, result.current);
        this.setState({
          location: result.city.name,
          temperature: result.main.temp,
          dayDetail: [
            {
              type: 'temp_max',
              value: result.current.maxTemp,
            },
            {
              type: 'temp_min',
              value: result.current.minTemp,
            },
            {
              type: 'humidity',
              value: result.current.humidity,
            },
            {
              type: 'wind_speed',
              value: result.current.windSpeed,
            },
          ],
        });
      })
      .catch((err) => { console.log(`Error reading data ${err}`); });
      */
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

    this.setState(() => (
      {
        // ...prevState,
        searchField: value,
      }
    ));
    // console.log(1 {location});
  }

  handleSubmitClick(event) {
    event.preventDefault();

    fetch(`http://localhost:9000/api/weather/${this.searchField}`)
      .then((res) => console.log(res));

    this.setState((prevState) => ({
      ...prevState,
      location: this.searchField,
    }));
  }

  collectCurrentWeatherData() {
    // let weatherData;
    const { location } = this.state;
    axios.get(`http://localhost:9000/api/weather/${location}`)
      .then((response) => response.data.data)
      .then((result) => {
        console.log(222, result);
        this.setState({
          // location: result.city.name,
          type: result.current.weather,
          temperature: result.current.temp,
          dayDetail: [
            {
              type: 'temp_max',
              value: result.current.maxTemp,
            },
            {
              type: 'temp_min',
              value: result.current.minTemp,
            },
            {
              type: 'humidity',
              value: result.current.humidity,
            },
            {
              type: 'wind_speed',
              value: result.current.windSpeed,
            },
          ],
        });
      });
  }

  render() {
    const { showDeails } = this.state;
    // console.log(333, temperature);
    return (
      <div className="weather-app">
        {/* <Switch>
          <Route exact path="/" component={<MainPage />} />
          <Route path="/details" component={<DetailPage />} />
        </Switch> */}
        {!showDeails ? (
          <MainPage
            onDetailClick={this.handleShowDetail}
            handleSeachFieldChange={this.handleSeachFieldChange}
            handleSubmitClick={this.handleSubmitClick}
            props={this.state}
          />
        ) : (
          <DetailPage onDetailClick={this.handleShowDetail} props={this.state} />
        )}
      </div>
    );
  }
}

export default WeatherApp;
