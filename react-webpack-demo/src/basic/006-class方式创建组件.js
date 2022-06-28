import React from 'react';
import ReactDOM from 'react-dom';

// 使用 class 方式实现组件，需要继承 React.Component
class Hello extends React.Component {
  // 内部必须实现 render 方法
  // render 渲染当前组件对应的虚拟DOM元素
  render() {
    // this 表示当前组件的实例对象
    // 访问传入的属性，直接通过 this.props.xxx 进行访问
    return (
      <h1>
        你好啊: {this.props.name} -- {this.props.age}
      </h1>
    );
  }
}

/*
    class 与 function 方式创建组件的区别：
        class创建的组件，有自己的的私有数据
        function创建的组件，只有 props，没有私有数据和生命周期函数

    function创建的也叫无状态组件
    class创建的组件也叫有状态组件

    无状态组件因为没有自己的state和生命周期函数，所以运行效率会比有状态组件稍微高一些
*/

const mydiv = (
  <div>
    <Hello name="zhagnsan" age={18} />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
