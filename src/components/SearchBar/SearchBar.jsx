import React from 'react';

import './SearchBar.styles.scss';

function SearchBar({
  searchField,
  handleSeachFieldChange,
  handleSubmitClick,
}) {
  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={handleSubmitClick}>
        <input
          value={searchField}
          className="search-input"
          type="search"
          placeholder="City in AU"
          onChange={(e) => handleSeachFieldChange(e)}
        />
        <input
          className="search-button"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default SearchBar;
