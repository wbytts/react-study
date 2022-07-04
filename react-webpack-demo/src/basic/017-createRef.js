import React, { createRef } from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
  /*
      React.createRef 调用后可以返回一个容器，该容器可以存储被 ref 所标识的节点
      该容器是专人专用的，一个容器只能绑定一个节点
  */
  myRef = createRef();
  // 保存数据
  data = {};

  handleClick = () => {
    console.log(this.myRef);
    this.myRef.current.value = 'Hello';
  };

  // 保存数据
  saveData = (name, data) => {
    this.data[name] = data;
  };

  getData = name => {
    return this.data[name];
  };

  render() {
    return (
      <div>
        <input ref={this.myRef} type="text" />
        <button onClick={this.handleClick}>点我提示输入的数据</button>
      </div>
    );
  }
}

const mydiv = (
  <div>
    <Demo />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
