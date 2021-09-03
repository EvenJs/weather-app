import React from 'react';

import './Time.styles.scss';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(props),
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

    return (
      <div className="time-wrapper">
        <span className="time">
          { time.toLocaleTimeString() }
          {this.getTime()}
        </span>
      </div>
    );
  }
}

export default Time;
