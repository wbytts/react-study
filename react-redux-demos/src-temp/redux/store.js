import { createStore, applyMiddleware} from 'redux';
// 引入 reducer
import allReducers from './reducers/index.js'
// 引入 redux-thunk，用于支持异步Action
import reduxThunk from 'redux-thunk';
// 引入 redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension';



// createStore 用于创建 redux中的store对象
const store = createStore(allReducers, composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;
