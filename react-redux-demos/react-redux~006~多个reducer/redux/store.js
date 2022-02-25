import { createStore, applyMiddleware, combineReducers } from 'redux';
// 引入 reducer
import countReducer from './reducers/count';
import bookReducer from './reducers/book';

// 引入 redux-thunk，用于支持异步Action
import reduxThunk from 'redux-thunk';

// 合并多个reducer
const allReducer = combineReducers({
  count: countReducer,
  book: bookReducer
})

// createStore 用于创建 redux中的store对象
const store = createStore(allReducer, applyMiddleware(reduxThunk));

export default store;
