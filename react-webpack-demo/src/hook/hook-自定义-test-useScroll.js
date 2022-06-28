import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import styled from 'styled-components';

import { useScroll } from './hooks/my-hooks.js';

const App = props => {
  const position = useScroll();

  let spans = [];
  for (let i = 0; i < 10000; i++) {
    spans.push(<span key={i}>{JSON.stringify(position)}</span>);
  }

  return <div style={{ width: '3000px' }}>{spans}</div>;
};

const mydiv = (
  <div>
    <App />
  </div>
);

let root = ReactDOM.createRoot(document.getElementById('app'));
root.render(mydiv);
