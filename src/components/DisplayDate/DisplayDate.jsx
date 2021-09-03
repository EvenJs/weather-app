import React from 'react';

import './DisplayDate.styles.scss';

// const date = new Date(input * 1000);
// const day = date.toDateString();

const DisplayDate = ({ input, timeShift }) => {
  // console.log(11, input);
  // const date = new Date(((input * 1000) + timeShift));
  const day = new Date(((input + timeShift) * 1000)).toDateString();
  return (
    <div className="date">
      { day }
    </div>
  );
};

export default DisplayDate;
