import React from 'react';

import './Time.styles.scss';

class Time extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date(),
    };
  }

  getTime() {
    setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  render() {
    const { time } = this.state;
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return (
      <div>
        <span>
          { time.toLocaleTimeString('en-us', options) }
          {this.getTime()}
        </span>
      </div>
    );
  }
}

export default Time;
