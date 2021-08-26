import React from 'react';

import EachDay from '../EachDay';
import './SevenDays.styles.scss';

class SevenDays extends React.Component {
  constructor() {
    super();
    this.state = '';
  }

  render() {
    return (
      <div className="next-seven-days">
        <EachDay week="Wed" url="https://image.flaticon.com/icons/png/512/1146/1146869.png" temprature="22" />
        <EachDay week="Wed" url="https://image.flaticon.com/icons/png/512/1146/1146869.png" temprature="22" />
        <EachDay week="Wed" url="https://image.flaticon.com/icons/png/512/1146/1146869.png" temprature="22" />
        <EachDay week="Wed" url="https://image.flaticon.com/icons/png/512/1146/1146869.png" temprature="22" />
        <EachDay week="Wed" url="https://image.flaticon.com/icons/png/512/1146/1146869.png" temprature="22" />
        <EachDay week="Wed" url="https://image.flaticon.com/icons/png/512/1146/1146869.png" temprature="22" />
        <EachDay week="Wed" url="https://image.flaticon.com/icons/png/512/1146/1146869.png" temprature="22" />
      </div>
    );
  }
}

export default SevenDays;
