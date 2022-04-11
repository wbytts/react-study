import React from 'react';
import ReactDOM from 'react-dom';

// 导入 Hello 组件，默认不能省略 .jsx 后缀名
import Hello from '@/components/Hello.jsx';

const p = {
  name: 'zhangsan',
  age: 18,
  gender: '男',
};

const mydiv = (
  <div>
    <Hello name="wby" />
    {/* 使用扩展运算符，展开属性 */}
    <Hello {...p} />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
