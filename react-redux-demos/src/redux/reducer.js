// 汇总 reducer

import { combineReducers } from 'redux';
import { reducer as bookReducer } from './book/reducer.js';
import { reducer as countReducer } from './count/reducer.js';

const reducers = [
  bookReducer,
  countReducer,
]

export default function reducer(state = initialState, action) {
  let new State;
}

// 合并多个reducer
const allReducer = combineReducers({
  count,
  book,
});

export default allReducer;
