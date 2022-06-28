import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import styled from 'styled-components';

/*
和 useMemo 类似，只不过 useCallback 一般是用来缓存函数，两者甚至可以转换。
*/

const App = props => {
  return <div></div>;
};

const mydiv = (
  <div>
    <App />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
