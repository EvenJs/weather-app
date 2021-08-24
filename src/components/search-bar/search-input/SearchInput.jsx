import React from 'react';

class SearchInput extends React.Component {
  constructor() {
    super();

    this.state = {
      location: 'Sydney',

    };
  }

  render() {
    const { location } = this.state;
    return (
      <input
        onChange={(e) => console.log(e.target.value)}
        className="search-input"
        type="search"
        placeholder={location}
      />
    );
  }
}

export default SearchInput;
