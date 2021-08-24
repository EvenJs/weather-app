import React from 'react';

import './SearchButton.styles.scss';

class SearchButton extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <button
        type="submit"
        onClick={console.log('readty to call api')}
      >
        Search
      </button>
    );
  }
}

export default SearchButton;
