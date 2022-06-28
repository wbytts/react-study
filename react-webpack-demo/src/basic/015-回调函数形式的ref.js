import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <input ref={a => this.input1 = a} type="text" placeholder="点击按钮提示数据" />
        <button onClick={this.handleClick}>点击提示左侧数据</button>
        <input ref={c => this.input2 = c} type="text" placeholder="失去焦点提示数据" />
      </div>
    );
  }

  handleClick = () => {
    console.log('提示数据~~~');
    this.input1.value = 'Hello';
    this.input2.value = 'world';
  };
}

const mydiv = (
  <div>
    <Demo />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));


