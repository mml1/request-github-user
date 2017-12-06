import React, { Component } from 'react';
import Results from '../js/results';

const requestUrl = user => 'https://api.github.com/users/${user}'

class GitHubRequest extends Component {
  render() {
      constructor(props){
          super(props)
      }
      componentDidMount(){
          
      }
    return (
        <div>
            <Results />

        </div>

    );
  }
}

export default GitHubRequest;
