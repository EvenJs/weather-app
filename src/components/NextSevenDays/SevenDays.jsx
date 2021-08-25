import React from 'react';

import './SevenDays.styles.scss';

class SevenDays extends React.Component {
  constructor() {
    super();
    this.state = '';
  }

  render() {
    return (
      <div className="next-seven-days">Next Seven Days</div>
    );
  }
}

export default SevenDays;
