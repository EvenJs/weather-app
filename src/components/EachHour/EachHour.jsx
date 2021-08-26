import React from 'react';

import './EachHour.styles.scss';

const EachHour = ({ hour, temperature }) => (
  <div className="hour-block">
    <div className="time">
      {hour}
    </div>
    <div className="temperature">
      {temperature}
    </div>
  </div>
);

export default EachHour;
