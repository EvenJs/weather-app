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
      dayDetail: [
        { temp_min: '' },
        { temp_max: '' },
        { humidity: '' },
        { wind: '' },
      ],
    };

    this.handleSeachFieldChange = this.handleSeachFieldChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleShowDetail = this.handleShowDetail.bind(this);
  }

  componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=de69afd1f26877e34f47989397ff77a3&units=metric')
      .then((response) => response.json())
      .then((result) => {
        // console.log(222, result.main.temp);
        this.setState({
          location: result.name,
          temperature: result.main.temp,
          dayDetail: [
            {
              type: 'temp_max',
              value: result.main.temp_max,
            },
            {
              type: 'temp_min',
              value: result.main.temp_min,
            },
            {
              type: 'humidity',
              value: result.main.humidity,
            },
            {
              type: 'wind_speed',
              value: result.wind.speed,
            },
          ],
        });
      })
      .catch((err) => { console.log(`Error reading data ${err}`); });
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

    this.setState((prevState) => ({
      ...prevState,
      location: this.searchField,
    }));
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
