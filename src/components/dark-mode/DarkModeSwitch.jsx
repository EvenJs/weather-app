import React from 'react';

import './DarkModeSwtich.styles.scss';

class DarkModeSwitch extends React.Component {
  constructor() {
    super();
    this.state = { isDarkMode: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  }

  render() {
    const { isDarkMode } = this.state;
    return (
      <button className="darkModeSwitch" type="button" onClick={this.handleClick}>
        {isDarkMode ? 'Light' : 'Dark'}
      </button>
    );
  }
}

export default DarkModeSwitch;
