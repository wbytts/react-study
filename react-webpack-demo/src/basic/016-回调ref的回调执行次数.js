import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
  handleClick = () => {
    console.log('提示数据', this.input1.value);
  };

  render() {
    return (
      <div>
        <input
          ref={c => {
            this.input1 = c;
            console.log(c);
          }}
          type="text"
        />
        <button onClick={this.handleClick}>点我提示输入的数据</button>
      </div>
    );
  }
}

/*
如果ref回调函数是以内联函数的形式定义的
那么在更新的过程中，这个回调会被执行两次
    第一次传入的参数是null，第二次传入的参数才是DOM
    因为内联的形式写的函数，每次渲染时都相当于得到了一个新的函数实例，所以React要清空旧的ref并且设置新的
    通过将ref的回调函数定义成class的绑定函数的方式可以避免上述问题（但一般问题不大）
*/

const mydiv = (
  <div>
    <Demo />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
