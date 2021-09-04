import React from 'react';

import './Time.styles.scss';

class Time extends React.Component {
  constructor(props) {
    super(props);

    const { props: timeOfLocation } = props;
    this.state = {
      time: new Date(timeOfLocation),
    };
  }

  // eslint-disable-next-line react/sort-comp

  componentDidMount() {
    const getTime = () => {
      setInterval(() => {
        this.setState({
          time: new Date(),
        });
      }, 1000);
    };

    getTime();
  }

  render() {
    const { time } = this.state;

    return (
      <div className="time-wrapper">
        <span className="time">
          {time.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}

export default Time;
