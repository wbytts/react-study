import React from 'react';
import ReactDOM from 'react-dom';

/*
    模块与组件：
        模块：
            向外提供特定功能的js程序，一般是一个js文件
            为什么要拆分模块，因为随着业务逻辑的增加，代码越来越多，越来越复杂
            作用：复用js，简化js编写，提高js运行效率
            模块化：当应用的js都是以模块来编写的，这个应用就是一个模块化应用
        组件：
            用来实现局部功能效果的代码和资源的集合
            为什么？一个界面的功能复杂，但是一个小部分的功能简单
            作用：复用代码，简化项目编码，提高运行效率
            组件化：当应用是以多个组件的方式实现的，这个应用就是一个组件化的应用
*/

// 函数式组件，组件名称需要使用或者首字母大写
function Hello(props) {
  console.log(props);
  // 注意：props 的属性是只读的，不能修改
  return <div>你好 {props.name}</div>;
}

const p = {
  name: 'zhangsan',
  age: 18,
  gender: '男',
};

const mydiv = (
  <div>
    <Hello name="wby" />
    {/* 展开对象属性的写法 */}
    <Hello {...p} />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
