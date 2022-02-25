import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addBook } from '../../redux/actions/book';

class Show extends Component {

  addBook = () => {
    this.props.addBook(this.refs.input.value)
  }

  render() {
    console.log('show-render', this.props);
    return (
      <div>
        <h1>Show组件</h1>
        <input ref="input"/>
        <button onClick={this.addBook}>添加</button>
        <ul>
           {this.props.books.map(book => <li key={new Date().getTime()}>{book}</li>)}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    count: state.count,
    books: state.book
  }),
  {
    addBook
  }
)(Show);
