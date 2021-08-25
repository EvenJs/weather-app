import React from 'react';
import { Link } from 'react-router-dom';

import './MoreInfo.scss';

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
        <Link to="/details"> More Information</Link>
      </button>
    );
  }
}

export default MoreInfo;
