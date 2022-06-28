import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
  state = {
    persons: [
      { id: 1, name: '张三', age: 18 },
      { id: 2, name: '李四', age: 19 },
    ],
  };

  addWang = () => {
    const { persons } = this.state;
    const p = { id: persons.length + 1, name: '小王', age: 20 };
    persons.push(p);
    this.setState({ persons });
  };

  /*
    虚拟DOM中key的作用：
        当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】
        随后react进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下
            a. 旧虚拟DOM中找到了与新虚拟DOM相同的key
                1. 若虚拟DOM的内容没变，直接使用之前的真实DOM
                2. 若虚拟DOM的内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM
            b. 旧虚拟DOM中未找到与新虚拟DOM相同的key
                根据数据创建新的真实DOM，随后渲染到页面

    用index作为key可能会引发的问题：
        1. 若对数据进行逆序添加，逆序删除等破坏顺序的操作：会产生没有必要的真实DOM更新，效率会变低
        2. 如果结构中还包含输入类的DOM，会产生错误的DOM更新，界面显示会有问题
        注：如果列表仅用于展示，使用index作为key是没有问题的
*/

  render() {
    return (
      <div>
        <h2>展示人员信息</h2>
        <button onClick={this.addWang}>添加一个小王</button>
        <ul>
          {this.state.persons.map(p => (
            <li key={p.id}>
              {p.name} --- {p.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mydiv = (
  <div>
    <Demo />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
