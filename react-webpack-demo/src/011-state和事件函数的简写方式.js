import React from 'react';
import ReactDOM from 'react-dom';

class SimpleState extends React.Component {

    // 初始化状态
    state = {
        msg: 'Hello'
    }

    render() {
        return <div>
            <h1>{this.state.msg}</h1>
            <button onClick={this.handleClick}>按钮</button>
        </div>
    }

    // 使用箭头函数简化事件函数，并且解决this的问题
    handleClick = () => {
        this.setState({msg: 'World'})
    }
}

const mydiv = (
    <div>
        <SimpleState />
    </div>
)

ReactDOM.render(mydiv, document.querySelector('#app'));
