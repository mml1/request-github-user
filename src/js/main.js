import React, { Component } from 'react';
import logo from '../logo.svg';
import SearchBox from './searchBox';
import Results from './results';
import GitHubRequest from '../js/githubRequest';


import '../style/App.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <header className="main-header">
          <h1 className="main-title">WhoAmI GitHub Version</h1>
        </header>
        <div className="main-search">
            <SearchBox />
        </div>
        <div className="main-results">
            <GitHubRequest user ='mml1' />
        </div>
      </div>
    );
  }
}

export default Main;
