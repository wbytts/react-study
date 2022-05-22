import React, { useState, useEffect } from 'react';

const Counter = props => {
  const [x, setX] = useState(() => {
    let item = localStorage.getItem('x');
    if (item) {
      return +item;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    console.log('x更新完了', x);
    localStorage.setItem('x', x);
  }, [x]);

  return (
    <div>
      <h3>{x}</h3>
      <button onClick={() => setX(x + 1)}>增加</button>
    </div>
  );
};

const App = props => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
