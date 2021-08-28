import React from 'react';

import './EachDay.styles.scss';

const EachDay = ({ week, url, temperature }) => (
  <div className="eachday-wrapper">
    <div className="eachday-week">{week}</div>
    <img className="eachday-icon" src={url} alt="weather icon" />
    <h3 className="each-temperature">
      {temperature}
      ℃
    </h3>
  </div>
);

export default EachDay;
