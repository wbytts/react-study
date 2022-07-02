import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from 'react';
import ReactDOM from 'react-dom/client';

const App = props => {
  return <div></div>;
};

const page = (
  <div>
    <App />
  </div>
);

const containerDOM = document.querySelector('#app');
const root = ReactDOM.createRoot(containerDOM);
root.render(page);
