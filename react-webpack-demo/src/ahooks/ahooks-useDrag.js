import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { useDrag } from 'ahooks';
import { useDragDiv } from './hooks/my-hooks';

/*
useDrag<T>(
  data: any, // 拖拽的内容
  target: (() => Element) | Element | MutableRefObject<Element>, // DOM 节点或者 Ref 对象
  options?: DragOptions // 额外的配置项
);
*/

const App = () => {
  const boxRef = useRef();
  useDragDiv(boxRef);

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: '100px', height: '100px', border: '1px solid red', position: 'absolute' }}
      ></div>
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
