// 创建组件、虚拟DOM、生命周期
import React from 'react';
// 把创建好的组件放到页面中显示
import ReactDOM from 'react-dom';

// 使用 JSX 语法（需要使用 babel）
// JSX语法的本质，在运行的时候，还是被转换成了 React.createElement的形式来执行的
/*
    npm install babel-core babel-loader@7 babel-plugin-transform-runtime -D
    npm install babel-preset-env babel-preset-stage-0 -D
    创建 .babelrc 文件：
    配置：
          {
              "presets": ["env", "stage-0", "react"],
              "plugins": ["transform-runtime"]
          }
*/
const mydiv = <div>
  <h1 id="head" title="标题">我是一个h1</h1>
</div>;


ReactDOM.render(mydiv, document.querySelector('#app'));
