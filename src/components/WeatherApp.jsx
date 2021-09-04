import React from 'react';
import axios from 'axios';
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
      searchField: '',
    };

    this.handleSeachFieldChange = this.handleSeachFieldChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleShowDetail = this.handleShowDetail.bind(this);
  }

  componentDidMount() {
    const { location } = this.state;
    fetch(`https://jr-weather-app-server.herokuapp.com/api/weather/${location}`)
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
    // console.log(888, event);
    event.preventDefault();

    // this.collectCurrentWeatherData();
    const { searchField } = this.state;

    // fail fast
    if (!searchField) {
      alert('please input the city');
      return false;
    }

    this.setState({
      location: this.searchField,
    });

    return axios
      .get(`https://jr-weather-app-server.herokuapp.com/api/weather/${searchField}`)
      .then((response) => {
        const { data } = response;

        this.setState({
          isLodaing: false,
          location: data.data.city.name,
          detail: data.data,
        });
      })
      .catch((error) => console.warn(error));
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
