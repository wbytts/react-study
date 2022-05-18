import React, { useState, useEffect } from 'react';

const App = props => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <button onClick={handleClick} style={{ padding: '10px' }}>
        helo world # {count}
      </button>
    </div>
  );
};

export default App;

// imrse --- React, useState, useEffect
// impt  --- PropTypes
// imrc --- React, Component
// usf、uef --- 使用useState、使用 useEffect
// ffc --- 函数式组件
// sfc --- 函数式组件（箭头函数） （Stateless Function Component）
