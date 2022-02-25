import { INCREMENT, DECREMENT } from "../constant"

const initState = 0;

// reducer会接受到：之前的状态, 动作对象
export default function countReducer(preState=initState, action) {
  console.log('countReducer@', preState, action);

  // if(preState === undefined) preState = 0;
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default: return preState;
  }
};
