import React, { useState, useEffect } from 'react';

const App = props => {
  const [count, setCount] = useState({
    num1: 0,
    num2: 0
  });

  const handleClick = () => setCount(() => {
    count.num1++;
    count.num2--;
    // 这里要返回一个新的对象，而不是返回 count
    return {...count};
  });

  return (
    <div>
      <button onClick={handleClick} style={{ padding: '10px' }}>
        helo world # {JSON.stringify(count)}
      </button>
      {/* <select multiple={true} value={['B', 'C']}></select> */}
    </div>
  );
};

export default App;


