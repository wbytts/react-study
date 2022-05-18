import React, { useRef } from 'react';

const MyComponent = () => {
  const divRef = useRef();

  const clickHandler = () => {
    // divRef.current 是所引用的元素的 DOM 对象
    console.log(divRef);
  };

  return (
    <div ref={divRef} onClick={clickHandler}>
      一个div
    </div>
  );
};

export default MyComponent;
