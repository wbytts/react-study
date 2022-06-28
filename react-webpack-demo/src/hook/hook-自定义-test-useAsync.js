import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import styled from 'styled-components';

import { useAsync } from './hooks/my-hooks.js';

const App = props => {
  const { execute, loading, data, error } = useAsync(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('异步任务执行');
        resolve({ name: '张三', age: 18 });
      }, 3000);
    });
  });

  return (
    <div>
      <button onClick={execute}>执行</button>
      <div>加载状态：{loading ? '加载中...' : '未加载'}</div>
      <div>数据：{JSON.stringify(data)}</div>
      <div>错误：{error}</div>
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
