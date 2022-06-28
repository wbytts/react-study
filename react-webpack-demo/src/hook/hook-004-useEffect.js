import React, { useState, useEffect } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import styled from 'styled-components';

/*
“在编程中，副作用是指在程序处理过程改变了程序范围之外的变量”
用 React 术语来说，副作用其实意味着“当组件的变量或状态因某些外部事物而改变”
我们不能确定这些代码的执行结果是什么。 我们永远无法百分百确定我们的组件会接收到什么样的 props，也无法确定接口调用返回的结果数据是什么。 而且，我们无法确定这将如何影响我们的组件。
所以可以这么说，当组件的状态因为一些外界因素改变的时候，这就可以称作副作用。

useEffect 接收两个参数，分别是要执行的回调函数、依赖数组。
如果依赖数组为空数组，那么回调函数会在第一次渲染结束后（componentDidMount）执行，返回的函数会在组件卸载时（componentWillUnmount）执行。
如果不传依赖数组，那么回调函数会在每一次渲染结束后（componentDidMount 和 componentDidUpdate）执行。
如果依赖数组不为空数组，那么回调函数会在依赖值每次更新渲染结束后（componentDidUpdate）执行，这个依赖值一般是 state 或者 props。

useEffect 比较重要，它主要有这几个作用：
  代替部分生命周期，如 componentDidMount、componentDidUpdate、componentWillUnmount。
  更加 reactive，类似 mobx 的 reaction 和 vue 的 watch。
  从命令式变成声明式，不需要再关注应该在哪一步做某些操作，只需要关注依赖数据。
  通过 useEffect 和 useState 可以编写一系列自定义的 Hook。


useEffect 和 useLayoutEffect 的区别是：
  useEffect 不会 block 浏览器渲染，而 useLayoutEffect 会。
  useEffect 会在浏览器渲染结束后执行，useLayoutEffect 则是在 DOM 更新完成后，浏览器绘制之前执行。
*/

const App = props => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // 在默认情况下，useEffect Hook 在每次渲染和重新渲染时都会执行。
  // 因此，只要组件中的状态发生变化或组件收到新的props时，组件都会重新渲染并导致`useEffect Hook 再次运行。

  // 当第二个参数为一个空数组的时候，就意味着useEffect Hook只在挂载时运行一次
  // useEffect(副作用函数, 副作用依赖);

  // 想要在组件即将卸载时运行一个Hook，我们只需从useEffect Hook 返回一个函数

  // 这么写的每次更新都会执行
  useEffect(() => {
    console.log('Hello World');
  });

  // 只有当x变化的时候才会执行
  useEffect(() => {
    console.log('x变化了');
  }, [x]);

  // 如果写一个空数组，则只会执行一次
  useEffect(() => {
    console.log('只会执行一次');
  }, []);

  // 如果想在组件卸载的时候执行，在useEffect的回调中返回一个函数即可

  return (
    <div>
      <button onClick={() => setX(x + 1)}>改变x</button>
      <button onClick={() => setY(y + 1)}>改变y</button>
      <div>
        {x} --- {y}
      </div>
    </div>
  );
};

const mydiv = (
  <div>
    <App />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
