// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入redux
// import store from '../../redux/store'
// 引入 connect 用于连接UI组件与redux
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count-action';


// 使用 react-redux之后，也不用自己监测组件的更新了...
// 容器组件拥有监测组件状态更新，然后重新渲染组件的功能
export default connect(
  state => ({
    count: state
  }),
  // dispatch => ({
  //   increment: data => {
  //     console.log('container, increment...', data);
  //     dispatch(createIncrementAction(data))
  //   },
  //   decrement: data => {
  //     console.log('container, decrement...', data);
  //     dispatch(createDecrementAction(data))
  //   },
  //   incrementAsync: (data, time) => {
  //     dispatch(createIncrementAsyncAction(data, time))
  //   }
  // })

  // mapDispatchToPropos的简写， 对象写法
  // 这种写法，会自动将对应的值放到 dispatch里调用
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
  }
)(CountUI);

