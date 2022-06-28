import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <input ref="input1" type="text" placeholder="点击按钮提示数据" />
        <button onClick={this.handleClick}>点击提示左侧数据</button>
        <input ref="input2" type="text" placeholder="失去焦点提示数据" />
      </div>
    );
  }
  handleClick = () => {
    console.log('提示数据~~~');
    // 可以看到 refs 已经不推荐使用了
    this.refs.input1.value = 'Hello';
  };
}

const mydiv = (
  <div>
    <Demo />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
