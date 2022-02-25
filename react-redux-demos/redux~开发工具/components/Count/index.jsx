import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createAddBookAction } from '../../redux/actions/book';
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/actions/count';

class Count extends Component {

  componentDidMount() {
  }

  increment = () => {
    this.props.increment(1);
  }

  decrement = () => {
    this.props.decrement(1);
  }

  incrementAsync = () => {
    this.props.incrementAsync(1, 2000)
  }

  render() {
    console.log('CountUI-Props', this.props)
    return (
      <div>
        <h1>Count组件</h1>
        <div>当前计数为: {this.props.count}</div>
        <button onClick={this.increment}>增加</button>
        <button onClick={this.decrement}>减少</button>
        <button onClick={this.incrementAsync}>异步增加</button>
      </div>
    )
  }
}

export default connect(
  // 映射状态 mapStateToProps
  state => ({
    count: state.count
  }),
  // 映射操作状态的方法 mapDispatchToProps:    dispatch => ({x => ...})
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction,
    addBook: createAddBookAction
  }
)(Count);
