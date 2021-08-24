import React from 'react';

import './Weather.styles.scss';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { tempreature } = this.state;
    return (
      <div className="weather">
        <div className="weather-picture" />
        <div className="temprature">
          { tempreature }
          14
        </div>
      </div>
    );
  }
}

export default Weather;
