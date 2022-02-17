// 创建组件、虚拟DOM、生命周期
import React from 'react';
// 把创建好的组件放到页面中显示
import ReactDOM from 'react-dom';

// 使用 JSX 语法（需要使用 babel）
// JSX语法的本质，在运行的时候，还是被转换成了 React.createElement的形式来执行的
/*
    npm install babel-core babel-loader@7 babel-plugin-transform-runtime -D
    npm install babel-preset-env babel-preset-stage-0 -D
*/


/*
    JSX语法规则：
        1. 定义虚拟DOM时，不要写引号
        2. 标签中混入JS表达式时要用 {} ， 注意是表达式，不是语句
        3. 样式的类名不要用 class，要用 className
        4. 内联样式需要用对象的形式 {{...}}
        5. 只能有一个根标签
        6. 标签必须要闭合
        7. 标签首字母
            若小写字母开头，则将标签改为HTML中同名元素，若html中无该标签对应的同名元素，则报错
            若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错
 */

const a = 10;
const str = "你好，中国";
const flag = false;
let title = "999";
const h1 = <h1>红红火火恍恍惚惚</h1>;

const arr = [<h2 key="1">111</h2>, <h2 key="2">222</h2>];

const strs = ['aaa', 'bbb', 'ccc'];

// 当需要在JSX内，写一些JS表达式，就可以使用 {...}


var aDiv = <div>这是一个块</div>


// 特点：自由
const mydiv = <div>
  <h1>{a * 3}</h1>
  <hr/>
  {str}
  <hr/>
  {flag ? '条件为真' : '条件为假'}
  <hr/>
  <p title={title}>这是一个p标签</p>
  <hr/>
  {/* 可以直接嵌入另一个JSX元素 */}
  {h1}
  <hr/>
  {/* 可以直接展示一个数组，数组中的元素甚至可以使JSX */}
  {arr}
  <hr/>
  {strs}
  {/* JSX中的注释写法 */}
  {
    // JSX中的单行注释写法，注意大括号的位置
  }
  {strs.map(e => <h2 key={e}>{e + '~~~'}</h2>)}
  <hr/>
  {/* class 属性要用 className 代替 */}
  {/* for 属性要用 htmlFor 代替 */}
</div>;

ReactDOM.render(mydiv, document.querySelector('#app'));
