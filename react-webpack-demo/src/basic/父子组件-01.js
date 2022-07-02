import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from 'react';
import ReactDOM from 'react-dom/client';

// 子组件
const Son = props => {
  return (
    <div>
      {/* 显示父组件传递过来的x */}
      <h1>{props.x}</h1>
      <button onClick={() => props.setX(999)}>修改父组件传过来的x</button>
    </div>
  );
};

// 父组件
const Fu = props => {
  const [x, setX] = useState(0);
  return (
    <div>
      <input type="text" value={x} onInput={e => setX(e.target.value)} />
      <Son x={x} setX={setX} />
    </div>
  );
};

const page = (
  <div>
    <Fu />
  </div>
);

const containerDOM = document.querySelector('#app');
const root = ReactDOM.createRoot(containerDOM);
root.render(page);
