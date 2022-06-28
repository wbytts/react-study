import React from 'react';
import ReactDOM from 'react-dom';

class SetState extends React.Component {
  constructor() {
    super(); // 关于 this 的操作需要放在 super 的后面，其他的可以放在前面的

    // 初始化 state
    this.state = {
      msg: 'Hello',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    );
  }

  handleClick() {
    // state 中的数据，不能直接进行更改，必须使用 setState 方法来修改
    this.setState({ msg: 'World' });
  }
}

const mydiv = (
  <div>
    <SetState />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
