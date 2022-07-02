import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Person extends React.Component {
  // 限制prop
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    // 函数类型用  PropTypes.func
  };

  // 默认prop
  static defaultProps = {
    name: '默认值',
  };

  render() {
    return (
      <ul>
        <li>姓名:{this.props.name}</li>
        <li>性别:{this.props.sex}</li>
        <li>年龄:{this.props.age}</li>
      </ul>
    );
  }
}

/*
React15版本的时候，React.PropTypes 还在维护，React16的时候，这个弃用了
*/
//! 可以在 class 定义之后补充 propTypes 和 defaultProps，但是有些人不喜欢分开写
// Person.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
// };

const mydiv = (
  <div>
    <Person name="zs" sex="男" age="18" />
    <Person name="ls" sex="女" age={20} />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
