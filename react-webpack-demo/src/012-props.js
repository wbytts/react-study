import React from 'react';
import ReactDOM from 'react-dom';

class Person extends React.Component {
  render() {
    return (
      <ul>
        <li> 姓名: {this.props.name} </li> <li> 性别: {this.props.sex} </li> <li> 年龄: {this.props.age} </li>{' '}
      </ul>
    );
  }
}

const mydiv = (
  <div>
    <Person name="zs" sex="男" age={18} /> <Person name="ls" sex="女" age={20} />{' '}
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
