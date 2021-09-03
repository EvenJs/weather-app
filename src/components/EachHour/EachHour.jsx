import React from 'react';

import './EachHour.styles.scss';

const EachHour = ({ hour, temperature }) => {
  const time = new Date(hour * 1000).getHours();
  return (
    <div className="hour-block">
      <div className="time">
        {time}
        : 00
      </div>
      <div className="temperature">
        {temperature}
        ℃
      </div>
    </div>
  );
};

export default EachHour;
