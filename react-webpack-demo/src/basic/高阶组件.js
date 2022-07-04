import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
  render() {
    return <div>123</div>;
  }
}

// 高阶组件也是一个组件
// 高阶组件通过一个函数生成，这个函数接收一个组件，并且返回一个新的组件

const page = (
  <div>
    <App />
  </div>
);

const containerDOM = document.querySelector('#app');
const root = ReactDOM.createRoot(containerDOM);
root.render(page);
