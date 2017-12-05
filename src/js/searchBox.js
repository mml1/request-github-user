import React, { Component } from 'react';
import Button from './button';

class SearchBox extends Component {
  render() {
    return (
      <div className = "search-box">
          <input type = "text"  className = "search-field"/> <Button id = "search-btn" url="https://google.com">Search</Button>
      </div>
    );
  }
}

export default SearchBox;
