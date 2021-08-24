import React from 'react';

class MoreInfo extends React.Component {
  constructor() {
    super();
    this.state = [];
  }

  render() {
    return (
      <button
        className="moreinfo"
        type="button"
      >
        More Information
      </button>
    );
  }
}

export default MoreInfo;
