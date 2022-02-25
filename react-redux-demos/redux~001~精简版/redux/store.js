import { createStore } from 'redux';
// 引入 reducer
import countReducer from './count-reducer.js';

// createStore 用于创建 redux中的store对象
const store = createStore(countReducer);

export default store;
