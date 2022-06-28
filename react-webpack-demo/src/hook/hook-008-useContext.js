import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import styled from 'styled-components';

/*
useMemo 的用法类似 useEffect，常常用于缓存一些复杂计算的结果。
useMemo 接收一个函数和依赖数组，当数组中依赖项变化的时候，这个函数就会执行，返回新的值。

    const sum = useMemo(() => {
        // 一系列计算
    }, [count])
*/

const ctx = createContext({
  name: '张三',
  age: 18,
});

const App = props => {
  const context = useContext(ctx);

  return (
    <div>
      <div>{context.name}</div>
      <div>{context.age}</div>
    </div>
  );
};

const mydiv = (
  <div>
    <App />
  </div>
);

let root = ReactDOM.createRoot(document.getElementById('app'));
root.render(mydiv);
