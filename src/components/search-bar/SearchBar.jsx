import React from 'react';

import SearchInput from './search-input/SearchInput';
import SearchButton from './search-button/SearchButton';
import DarkModeSwitch from '../dark-mode/DarkModeSwitch';

import './SearchBar.styles.scss';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      //      searchField: ''
    };
  }

  render() {
    return (
      <div className="search-bar">
        <SearchInput />
        <SearchButton />
        <DarkModeSwitch />
      </div>
    );
  }
}

export default SearchBar;
