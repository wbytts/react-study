import create from 'flooks';

// 创建状态hook
const useCounter = create(({ get, set }) => ({
  count: 0, // 状态的数据
  x: 3,

  // 方法
  add() {
    const { count } = get();
    set({ count: count + 1 }); // 对象形式
    // set((state) => ({ a: state.a + state.b })); // 函数形式
  },
  // 异步的方法
  async addAsync() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { add } = get(); // 获取自身 store

    // 彼此互通的 store - 调用 get(useOutStore) 获取其他 store，所有 store 均可互通。
    // const { x, y } = get(useOutStore); // 获取其它 store
    add();
  },
}));

export default useCounter
