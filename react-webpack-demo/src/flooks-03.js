import React from 'react';
import ReactDOM from 'react-dom';
import use$counter from './flooks/counter'


function Counter() {
  const { count, add, addAsync } = use$counter();

  return (
    <div>
      <p>{count}</p>
      <button onClick={add}>+</button>
      <button onClick={addAsync}>+~ {addAsync.loading && '...'}</button>
    </div>
  );
}

function Counter2() {
  const { count, add, addAsync, x } = use$counter(); // 可以发现，多次调用这个hook，使用的是同一个状态

  return (
    <div>
      <p>{count} --- {x}</p>
      <button onClick={add}>+</button>
      <button onClick={addAsync}>+~ {addAsync.loading && '...'}</button>
    </div>
  );
}

const mydiv = (
  <div>
    <Counter />
    <Counter2 />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
