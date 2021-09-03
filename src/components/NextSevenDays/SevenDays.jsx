import React from 'react';

import EachDay from '../EachDay';
import './SevenDays.styles.scss';

const SevenDays = ({
  input, timeShift, baseURL,
}) => {
  console.log(200, timeShift);
  return (
    <div className="next-seven-days">
      {input.map((data) => (
        <EachDay
          week={data.time * 1000 + timeShift}
          url={`${baseURL}${data.weatherIcon}@2x.png`}
          weather={data.weather}
          temperature={data.temperature}
        />
      ))}
    </div>
  );
};

export default SevenDays;
