import React, { Component } from 'react';
import logo from '../logo.svg';
import SearchBox from './searchBox';
import Results from './results';

import '../style/App.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WhoAmI GitHub Version</h1>
        </header>
        <div className="App-intro">
            <SearchBox />
        </div>
        <div className="results">
            <Results />
        </div>
      </div>
    );
  }
}

export default Main;
