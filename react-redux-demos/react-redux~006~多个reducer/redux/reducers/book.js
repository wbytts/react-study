import { ADD_BOOK } from "../constant"

const initState = [];

export default function bookReducer(preState=initState, action) {
  console.log('bookReducer@', preState, action);
  const { type, data } = action;
  switch (type) {
    case ADD_BOOK:
      preState.push(data); // 注意 push 方法并不返回数组的结果
      return preState
    default: return preState;
  }
};
