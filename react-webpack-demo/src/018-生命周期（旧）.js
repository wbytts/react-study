import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {

  state = {
    count: 0
  };

  add = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  death = () => {
    // 卸载组件
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
  };

  force = () => {
    this.forceUpdate();
  };

  /*
      初始化阶段： 由 ReactDOM.render 触发，初次渲染
          constructor
          componentWillMount
          render
          componentDidMount：一般在这里做一些初始化的事情，如：开启定时器，发送网络请求等

      更新阶段：由 setState 触发
          shouldComponentUpdate
          conponentWillUpdate
          render
          componentDidUpdate

      父组件【重新】render 触发
          componentWillReceiveProps
          shouldComponentUpdate
          conponentWillUpdate
          render
          componentDidUpdate

      卸载组件：由 ReactDOM.unmountComponentAtNode() 触发
          componentWillUnmount：一般在这里做一些善后工作

  */

  constructor(props) {
    super(props);
    console.log('constructor, 组件构造器');
  }

  componentWillMount() {
    console.log('componentWillMount, 组件将要挂载');
  }

  componentDidMount() {
    comnsole.log('componentDidMount, 组件挂载完成');
  }

  // 父组件 render 时，子组件会执行这个钩子（第一次不算！）
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps, 组件将要接收props');
  }

  // setState 触发
  shouldComponentUpdate() {  // 默认提供为空，返回 true
    console.log('shouldComponentUpdate, 组件是否应该更新');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate, 组件将要更新');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate, 组件更新完成');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount, 组件将要卸载');
  }

  render() {
    console.log('render, 组件渲染');
    return (
      <div>
        NOW: {this.state.count}
        <br />
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.death}>卸载组件</button>
        <button onClick={this.force}>强制更新组件</button>
      </div>
    );
  }
}

const mydiv = (
  <div>
    <Demo x={1} />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
