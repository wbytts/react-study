// 汇总 reducer

import {combineReducers } from 'redux';
import count from './count';
import book from './book';


// 合并多个reducer
const allReducer = combineReducers({
  count, book
})

export default allReducer
