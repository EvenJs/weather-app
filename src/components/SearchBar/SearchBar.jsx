import React from 'react';

import './SearchBar.styles.scss';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      // location: '',
      //      searchField: ''
    };
  }

  render() {
    // const { location } = this.state;
    return (
      <div className="search-bar">
        <form className="search-form">
          <input
            onChange={(e) => console.log(e.target.value)}
            className="search-input"
            type="search"
            placeholder="City in AU"
          />
          <button
            className="search-button"
            type="submit"
            onClick={console.log('readty to call api')}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
