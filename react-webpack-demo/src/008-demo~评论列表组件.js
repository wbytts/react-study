import React from 'react';
import ReactDOM from 'react-dom';

/*
CSS模块化的使用，以引入模块的形式引入CSS
得到的是一个对象，键是类名，值是按照webpack处理过之后的类名
*/
import cssobj from '@/css/008.css';

// 引入 bootstrap 样式表
import bootcss from 'bootstrap/dist/css/bootstrap.css';
console.log(bootcss);

// 评论项组件
function CmtItem(props) {
  // 在JSX语法中不能直接写字符串格式的 style 行内样式
  const itemStyle = {
    border: '1px dashed #ccc',
    margin: '10px',
    padding: '10px',
    boxShadow: '0 0 10px #ccc'
  };
  const contentStyle = {
    fontSize: '12px'
  };
  return <div key={props.id} style={itemStyle}>
    {/* CSS模块化，只能应用于 类名选择器 和 id选择器 */}
    <h1 className={cssobj.title} id={cssobj.cmtTitle}>评论人: {props.user}</h1>
    <p style={contentStyle}>评论内容: {props.content}</p>
  </div>;
}

// 评论列表组件
class CmtList extends React.Component {
  constructor() {
    super();
    this.state = {
      CommentList: [
        { id: 1, user: '张三', content: '哈哈，沙发' },
        { id: 2, user: '李四', content: '哈哈，板凳' },
        { id: 3, user: '王五', content: '哈哈，凉席' },
        { id: 4, user: '赵六', content: '哈哈，枕头' },
        { id: 5, user: '田七', content: '哈哈，砖头' },
      ]
    };
  }
  render() {
    return <div>
      <h1 style={{ textAlign: 'center' }}>这是评论列表组件</h1>
      <button
        className={[bootcss.btn, bootcss['btn-primary']].join(' ')}
        style={{ marginLeft: '10px' }}
      >一个按钮
      </button>
      {this.state.CommentList.map(item => <CmtItem {...item} key={item.id} />)}
    </div>;
  }
}

const mydiv = <div>
  <CmtList />
</div>;

ReactDOM.render(mydiv, document.querySelector('#app'));
