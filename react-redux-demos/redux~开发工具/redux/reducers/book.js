import { ADD_BOOK } from "../constant"

const initState = [];

export default function bookReducer(preState=initState, action) {
  console.log('bookReducer@', preState, action);
  const { type, data } = action;
  switch (type) {
    case ADD_BOOK:
      // 这么更改数组，不会让react检测到需要更改的状态，视图也不会重新渲染
      // 这么做其实也相当于改写了 preState，导致这个函数不再是一个纯函数了
      preState.push(data); // 注意 push 方法并不返回数组的结果
      return [...preState] // 要让数组的引用发生变化，才能被检测到
    default: return preState;
  }
};
