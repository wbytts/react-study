import React, { useState } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import styled from 'styled-components';

function useInputValue(defaultValue = '') {
  const [value, setValue] = React.useState(defaultValue);
  const change = React.useCallback(event => setValue(event.target.value), []);
  const clear = React.useCallback(event => setValue(''), []);
  return { value, change, clear };
}

const App = props => {
  const inputVal = useInputValue();

  return (
    <div>
      <input value={inputVal.value} onChange={inputVal.change} />
      <button onClick={inputVal.clear}>清空</button>
      <div>{inputVal.value}</div>
    </div>
  );
};


const mydiv = (
  <div>
    <App />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
