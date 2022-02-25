import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count-action';

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
        <h3>当前求和为: {this.props.count}</h3>
        <button onClick={this.increment}>增加</button>
        <button onClick={this.decrement}>减少</button>
        <button onClick={this.incrementAsync}>异步增加</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: data => {
      console.log('container, increment...', data);
      dispatch(createIncrementAction(data))
    },
    decrement: data => {
      console.log('container, decrement...', data);
      dispatch(createDecrementAction(data))
    },
    incrementAsync: (data, time) => {
      dispatch(createIncrementAsyncAction(data, time))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);
