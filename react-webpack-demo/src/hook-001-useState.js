import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Count = props => {
  const [x, setX] = useState(0);

  return (
    <div>
      <div>{x}</div>
      <button onClick={() => setX(x + 1)}>增加</button>
      <button onClick={() => setX(x - 1)}>减少</button>
    </div>
  );
};


const mydiv = (
  <div>
    <Count />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
