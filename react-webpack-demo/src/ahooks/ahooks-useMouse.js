import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useMouse } from 'ahooks';

/*
const state: {
  screenX: number, // 距离显示器左侧的距离
  screenY: number, // 距离显示器顶部的距离
  clientX: number, // 距离当前视窗左侧的距离
  clientY: number, // 距离当前视窗顶部的距离
  pageX: number, // 距离完整页面左侧的距离
  pageY: number, // 距离完整页面顶部的距离
  elementX: number, // 距离指定元素左侧的距离
  elementY: number, // 距离指定元素顶部的距离
  elementH: number, // 指定元素的高
  elementW: number, // 指定元素的宽
  elementPosX: number, // 指定元素距离完整页面左侧的距离
  elementPosY: number, // 指定元素距离完整页面顶部的距离
} = useMouse(target?: Target); // DOM 节点或者 Ref


*/

const App = () => {
  const boxRef = useRef();
  const mouse = useMouse(boxRef);

  return (
    <div>
      <div>距离显示器左侧的距离：{mouse.screenX}</div>
      <div>距离显示器顶部的距离：{mouse.screenY}</div>
      <div>距离当前视窗左侧的距离：{mouse.clientX}</div>
      <div>距离当前视窗顶部的距离：{mouse.clientY}</div>
      <div>距离完整页面左侧的距离：{mouse.pageX}</div>
      <div>距离完整页面顶部的距离：{mouse.pageY}</div>
      <div>距离指定元素左侧的距离：{mouse.elementX}</div>
      <div>距离指定元素顶部的距离：{mouse.elementY}</div>
      <div>指定元素的高：{mouse.elementH}</div>
      <div>指定元素的宽：{mouse.elementW}</div>
      <div>指定元素距离完整页面左侧的距离：{mouse.elementPosX}</div>
      <div>指定元素距离完整页面顶部的距离：{mouse.elementPosY}</div>

      <div ref={boxRef} style={{ width: '100px', height: '100px', border: '1px solid red', marginLeft: '200px', marginTop: '30px' }}></div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
