import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../redux/actions/book';
import { increment, decrement, incrementAsync } from '../../redux/actions/count';

class Count extends Component {
  render() {
    return (
      <div>
        <h1>Count组件</h1>
        <div>当前计数为: {this.props.count}</div>
        <button onClick={() => this.props.increment(1)}>增加</button>
        <button onClick={() => this.props.decrement(1)}>减少</button>
        <button onClick={() => this.props.incrementAsync(1, 2000)}>异步增加</button>
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
