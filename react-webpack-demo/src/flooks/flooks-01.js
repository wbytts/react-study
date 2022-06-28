import React from 'react';
import ReactDOM from 'react-dom';
import create from 'flooks';

// 创建状态hook
const useCounter = create(({ get, set }) => ({
  count: 0, // 状态的数据

  // 方法
  add() {
    const { count } = get();
    set({ count: count + 1 }); // 对象形式
    // set((state) => ({ a: state.a + state.b })); // 函数形式
  },
  // 异步的方法
  async addAsync() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const { add } = get(); // 获取自身 store

    // 彼此互通的 store - 调用 get(useOutStore) 获取其他 store，所有 store 均可互通。
    // const { x, y } = get(useOutStore); // 获取其它 store
    add();
  },
}));

function Counter() {
  const { count, add, addAsync } = useCounter();

  return (
    <div>
      <p>{count}</p>
      <button onClick={add}>+</button>
      <button onClick={addAsync}>+~ {addAsync.loading && '...'}</button>
    </div>
  );
}

function Counter2() {
  const { count, add, addAsync } = useCounter(); // 可以发现，多次调用这个hook，使用的是同一个状态

  return (
    <div>
      <p>{count}</p>
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
