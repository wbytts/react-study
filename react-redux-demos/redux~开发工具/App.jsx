import React, { Component } from 'react';
import Count from './components/Count';
import Show from './components/Show';

export default class App extends Component {
  render() {
    return (
      <div>
        <Count/>
        <hr />
        <Show />
      </div>
    )
  }
}
