// 创建组件、虚拟DOM、生命周期
import React from 'react';
// 把创建好的组件放到页面中显示
import ReactDOM from 'react-dom';

// 创建元素
// 参数1：创建元素的类型，字符串，元素名称
// 参数2：是一个对象或者null，表示当前这个DOM元素的属性
// 参数3：子节点
// 参数n：其他子节点
const myh1 = React.createElement('h1', {id: 'head', title: '标题'}, '这是一个h1');

// 再套一个div
const mydiv = React.createElement('div', null, '这是一个div元素', myh1);

/*
    虚拟DOM：这里的myh1和mydiv都是虚拟DOM
    用JS对象的形式，来表示DOM之间的嵌套关系、属性
*/

// 将虚拟DOM渲染到页面上
// 参数1：虚拟DOM对象
// 参数2：页面上的DOM元素对象
ReactDOM.render(mydiv, document.querySelector('#app'));






