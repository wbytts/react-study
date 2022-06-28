import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/*
使用hook时必须遵守的规则：
  请不要在循环、条件或者嵌套函数中调用 Hooks
  都有在 React 函数中才去调用 Hooks

Hooks 的状态管理都是依赖数组的
*/

const Count = _ => {
  const [x, setX] = useState(0);

  return (
    <div>
      <div>{x}</div>
      <button onClick={() => setX(x + 1)}>增加</button>
      <button onClick={() => setX(x - 1)}>减少</button>
    </div>
  );
};

const app = (
  <div>
    <Count />
  </div>
);

ReactDOM.render(app, document.querySelector('#app'));
