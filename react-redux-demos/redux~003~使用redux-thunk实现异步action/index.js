import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// import store from './redux/store';



ReactDOM.render(<App />, document.getElementById('root'));

// 监测redux的变化，更新组件
/*
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
*/
