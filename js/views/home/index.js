import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleState: new Date().getTime(),
      sampleTest2: 'test',
    };
  }

  render() {
    return (
      <div>
        {this.state.sampleState}<br />
        {this.state.sampleTest2}<br />
        test awd
      </div>
    );
  }
}

export function path() {
  return '/home';
}
