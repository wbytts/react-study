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
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
  };

  force = () => {
    this.forceUpdate();
  };

  constructor(props) {
    super(props);
    console.log('constructor, 组件构造器');
  }

  static getDerivedStateFromProps(props, state) {
    // 如果这里返回了对象，那么 this.state 总是以这里返回的为准！（合并）
    return state;
  }

  shouldComponentUpdate() {
    return true;
  }

  // 在最近一次渲染输出之前（提交到DOM节点）调用
  // 此生命周期的任何返回值，都会作为参数传递给 componentDidUpdate
  getSnapshotBeforeUpdate() {
    // 任何值都可以作为快照值
    return 'asdasdasd';
  }

  // 新版本的生命周期中，也可以使用旧的钩子
  // 在 React 18 之后，只有添加 UNSAFE_ 前缀才可以使用（这里的 UNSAFE 和安全性无关，而是指这个东西在未来的版本可能会出现bug）
  // 或者添加 npx react-codemod rename-unsafe-lifecycles 到项目中

  componentDidMount() {
    console.log('componentDidMount, 组件挂载完成');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate, 组件更新完成', prevProps, prevState, snapshot);
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
