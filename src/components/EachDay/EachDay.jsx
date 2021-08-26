import React from 'react';

import './EachDay.styles.scss';

const EachDay = ({ week, url, temprature }) => (
  <div className="eachday-wrapper">
    <div className="eachday-week">{ week }</div>
    <img className="eachday-icon" src={url} alt="weather icon" />
    <h3 className="each-temperature">
      {temprature}
      ℃
    </h3>
  </div>
);

export default EachDay;
