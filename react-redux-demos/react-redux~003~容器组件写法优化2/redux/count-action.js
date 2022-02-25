import { INCREMENT, DECREMENT } from "./constant"
// import store from "./store"

export const createIncrementAction = data => ({ type: INCREMENT, data})

export const createDecrementAction = data => ({type: DECREMENT, data})

export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      // store.dispatch(createIncrementAction(data))
      // 不用自己引入 store，在这里可以接收到一个 dispatch
      dispatch(createIncrementAction(data))
    }, time)
  }
}


