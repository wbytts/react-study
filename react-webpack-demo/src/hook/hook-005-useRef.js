import React, { useState, useEffect, useRef } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import styled from 'styled-components';

/*
useRef返回 一个对象，它拥有一个 current 属性，并且不管函数组件执行多少次，而 useRef 返回的对象永远都是原来那一个

useRef 有下面这几个特点：
  useRef 是一个只能用于函数组件的方法。
  useRef 是除字符串 ref、函数 ref、createRef 之外的第四种获取 ref 的方法。
  useRef 在渲染周期内永远不会变，因此可以用来引用某些数据。
  修改 ref.current 不会引发组件重新渲染。

useRef vs createRef：
  两者都是获取 ref 的方式，都有一个 current 属性。
  useRef 只能用于函数组件，createRef 可以用在类组件中。
  useRef 在每次重新渲染后都保持不变，而 createRef 每次都会发生变化。
*/

const App = props => {
  const xInput = useRef();

  let handleClick = () => {
    console.log(xInput.current.value);
  };

  return (
    <div>
      <input ref={xInput} />
      <button onClick={handleClick}>按钮</button>
    </div>
  );
};

const mydiv = (
  <div>
    <App />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
