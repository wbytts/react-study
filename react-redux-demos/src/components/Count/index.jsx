import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '@/redux/actions/book';
import { increment, decrement, incrementAsync } from '@/redux/actions/count';

class Count extends Component {
  increment = () => this.props.increment(1);
  decrement = () => this.props.decrement(1);
  incrementAsync = () => this.props.incrementAsync(1, 2000);

  render() {
    return (
      <div>
        <h3>Count组件</h3>
        <div>当前计数为: {this.props.count}</div>
        <button onClick={this.increment}>增加</button>
        <button onClick={this.decrement}>减少</button>
        <button onClick={this.incrementAsync}>异步增加</button>
      </div>
    );
  }
}

export default connect(
  // 映射状态 mapStateToProps
  state => ({
    count: state.count,
  }),
  // 映射操作状态的方法 mapDispatchToProps:    dispatch => ({x => ...})
  {
    increment,
    decrement,
    incrementAsync,
    addBook,
  }
)(Count);
