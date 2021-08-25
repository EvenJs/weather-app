import React from 'react';

import './Weather.styles.scss';

const Weather = ({ tempreature, imageUrl }) => (
  <div className="weather">
    <div
      className="weather-picture"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    />
    <div className="temprature">
      { tempreature }
    </div>
  </div>
);

/*

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: { imgUrl: '../../asset/sunny.png' },
      tempreature: 123,
    };
  }

  render() {
    const { weather, tempreature } = this.state;
    return (
      <div className="weather">
        <div
          className="weather-picture"
          style={{ backgroundImage: `url('${weather.imgUrl}')` }}
        />
        <div className="temprature">
          { tempreature }
        </div>
      </div>
    );
  }
}
*/

export default Weather;
