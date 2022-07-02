import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <div>Hello</div>;
}

const mydiv = (
  <div>
    <App />
  </div>
);

const containerDOM = document.querySelector('#app');
const root = ReactDOM.createRoot(containerDOM);
root.render(mydiv);
