import React from 'react';
import ReactDOM from 'react-dom';

// 使用 class 方式实现组件，需要继承 React.Component
class Hello extends React.Component {
  // 内部必须实现 render 方法
  // render 渲染当前组件对应的虚拟DOM元素
  render() {
    // this 表示当前组件的实例对象
    // 访问传入的属性，直接通过 this.props.xxx 进行访问
    // 或者通过解构赋值来拿到属性值
    return (
      <div>
        <h1>
          你好啊: {this.props.name} -- {this.props.age}
        </h1>
        <h2>{this.state.msg}</h2>
      </div>
    );
  }

  // 组件类的构造方法
  constructor(props) {
    // 接收 props
    // 由于继承了 React.Component，所以要调用 super
    // 只有调用了 super() 后，才能使用 this 关键字
    super(props);
    // 相当于 vue 中的 data
    this.state = {
      msg: '大家好，这里是 this.state.msg 的信息',
    };
  }
}

/*
    props 与 state：
        props里的数据是外界传递过来的，只读，不能修改
        state的数据，是组件私有的，可读可写
*/

const mydiv = (
  <div>
    <Hello name="zhagnsan" age={18} />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
