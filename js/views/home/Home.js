import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        home
      </div>
    );
  }
}

export function path() {
  return '/home';
}
