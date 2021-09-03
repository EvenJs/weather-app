import React from 'react';

import MainPage from '../page/MainPage/MainPage';
import DetailPage from '../page/DetailPage/DetailPage';
import './WeatherApp.styles.scss';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLodaing: true,
      showDetails: false,
      // weatherIconUrl: `https://openweathermap.org/img/wn/${input}@2x.png`,
      location: 'Sydney',
      data: ' ',
    };

    this.handleSeachFieldChange = this.handleSeachFieldChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleShowDetail = this.handleShowDetail.bind(this);
  }

  componentDidMount() {
    const { location } = this.state;
    fetch(`http://localhost:9000/api/weather/${location}`)
      .then((res) => {
        res.json()
          .then((data) => {
            // console.log(999, data.data);
            this.setState({
              isLodaing: false,
              input: '',
              location: data.data.city.name,
              detail: data.data,
              timeOfLocation: data.data.current.time * 1000 + data.data.time.timeShift,
            });
          });
      })
      .catch((error) => error);
    // this.collectCurrentWeatherData();
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

  async handleSubmitClick(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      location: this.searchField,
    }));
    // this.collectCurrentWeatherData();
    const { searchField } = this.state;
    await fetch(`http://localhost:9000/api/weather/${searchField}`)
      .then((res) => {
        res.json()
          .then((data) => {
            console.log(1, data.data);
            this.setState({
              isLodaing: false,
              location: data.data.city.name,
              detail: data.data,
            });
          });
      })
      .catch((error) => error);

    /*
      .then((res) => console.log(123, res))
      .then((data) => {
        this.setState({
          location: data.data.city.name,
          detail: data.data,
        });
      });
      */
  }

  render() {
    const { showDeails, isLodaing } = this.state;
    // console.log(123, detail);
    // console.log(333, temperature);
    return (
      isLodaing
        ? (
          <div> Lodaing  </div>
        ) : (
          <div className="weather-app">
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
        )
    );
  }
}

export default WeatherApp;
