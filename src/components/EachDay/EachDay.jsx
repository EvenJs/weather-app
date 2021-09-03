import React from 'react';

import './EachDay.styles.scss';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const EachDay = ({
  week, url, temperature, weather,
}) => {
  console.log(100, week);
  // console.log(110, timeShift);
  const time = new Date(week).getDay();
  return (
    <div className="eachday-wrapper">
      <div className="eachday-week">{days[time]}</div>
      <img className="eachday-icon" src={url} alt="weather icon" />
      <div className="eachday-weather">{weather}</div>
      <h3 className="each-temperature">
        {temperature}
        ℃
      </h3>
    </div>
  );
};

export default EachDay;
