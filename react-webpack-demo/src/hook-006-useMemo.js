import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import styled from 'styled-components';

/*
useMemo 的用法类似 useEffect，常常用于缓存一些复杂计算的结果。
useMemo 接收一个函数和依赖数组，当数组中依赖项变化的时候，这个函数就会执行，返回新的值。

    const sum = useMemo(() => {
        // 一系列计算
    }, [count])


*/

const App = props => {
  return (
    <div>

    </div>
  );
};

const mydiv = (
  <div>
    <App />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
