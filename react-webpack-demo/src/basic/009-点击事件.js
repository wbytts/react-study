import React from 'react';
import ReactDOM from 'react-dom';

class BindEvent extends React.Component {
  constructor() {
    super();
    this.state = {};

    // 构造器中的this就是这个类的实例对象
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>按钮</button>
        {/* 直接在设置事件属性的时候bind */}
        <button onClick={this.handleClick.bind(this)}>按钮</button>
        {/* onClick 接收 function，箭头函数本身是一个函数 */}
        <button onClick={() => this.print('你好啊')}>按钮2</button>
      </div>
    );
  }

  handleClick() {
    // 作为 onClick 的回调，不是通过实例调用的，而是直接调用的
    // 又因为，类中定义的方法，默认在局部开启了严格模式，所以直接调用访问this为 undefined
    // 如果没有开启严格模式（this应该是window）
    console.log(222, this);
  }

  // 使用箭头函数解决 this的问题
  print = msg => {
    console.log(msg, this);
  };
}

const mydiv = (
  <div>
    <BindEvent />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
