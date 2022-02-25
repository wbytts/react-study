import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count-action';

class Count extends Component {
  increment = () => this.props.increment(1);
  decrement = () => this.props.decrement(1);
  incrementAsync = () => this.props.incrementAsync(1, 2000);

  render() {
    console.log('CountUI-Props', this.props)
    return (
      <div>
        <h1>当前求和为: {this.props.count}</h1>
        <button onClick={this.increment}>增加</button>
        <button onClick={this.decrement}>减少</button>
        <button onClick={this.incrementAsync}>异步增加</button>
      </div>
    )
  }
}

export default connect(
  state => ({count: state}),
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
  }
)(Count);
