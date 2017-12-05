import React, { Component } from 'react';
import Button from './button';

class SearchBox extends Component {
  render() {
    return (
      <div className = "search__box">
          <input type = "text"  className = "search__field"/> <Button id = "search__btn" url="https://google.com">Search</Button>
      </div>
    );
  }
}

export default SearchBox;
