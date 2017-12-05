import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <a className = "btn btn-search" id = {this.props.id} href = {this.props.url} target = "_top"
      role = "button"> {this.props.children}</a>
    );
  }
}

export default Button;
