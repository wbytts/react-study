import React, { Component } from 'react'
import store from '../../redux/store';
import { createIncrementAction, createDecrementAction } from '../../redux/count-action';

export default class Count extends Component {

  componentDidMount() {
    // 监测redux中状态的变化，只要变化，就调用render
    store.subscribe(() => {
      console.log('redux的状态发生改变');
      this.forceUpdate(); // 或者用 this.setState({})
    });
  }

  increment = () => {
    console.log('增加');
    // store.dispatch({type: 'increment', data: 3});
    store.dispatch(createIncrementAction(3));
    // this.forceUpdate(); // 强制更新
  }

  decrement = () => {
    console.log('减少');
    // store.dispatch({type: 'decrement', data: 3});
    store.dispatch(createDecrementAction(3));
    // this.forceUpdate(); // 强制更新
  }

  render() {
    return (
      <div>
        <h1>当前求和为: {store.getState()}</h1>
        <button onClick={this.increment}>增加</button>
        <button onClick={this.decrement}>减少</button>
      </div>
    )
  }
}
