import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../redux/actions/book';

class Show extends Component {
  input = createRef();
  render() {
    return (
      <div>
        <h3>Show组件</h3>
        <input ref={this.input} />
        <button onClick={() => this.props.addBook(this.input.current.value)}>添加</button>
        <ul>
          {this.props.books.map(book => (
            <li key={Math.random()}>{book}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    count: state.count,
    books: state.book,
  }),
  {
    addBook,
  }
)(Show);
