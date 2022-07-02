import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [x, setX] = useState('');

  return (
    <div>
      <input type="text" value={x} onInput={e => setX(e.target.value)} />
      <h1>{x}</h1>
    </div>
  );
}

const page = (
  <div>
    <App />
  </div>
);

const containerDOM = document.querySelector('#app');
const root = ReactDOM.createRoot(containerDOM);
root.render(page);
