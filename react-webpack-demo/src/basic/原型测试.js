import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

let item = <App />;

console.log(item);

const page = (
  <div>
    <App />
  </div>
);

const containerDOM = document.querySelector('#app');
const root = ReactDOM.createRoot(containerDOM);
root.render(page);
