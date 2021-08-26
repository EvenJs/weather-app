import React from 'react';

import './DisplayDate.styles.scss';

const date = new Date();
const day = date.toDateString();

const DisplayDate = () => (
  <div className="date">
    { day }
  </div>
);

export default DisplayDate;
