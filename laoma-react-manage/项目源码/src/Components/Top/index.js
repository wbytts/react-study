import React, { Component, Fragment } from 'react'
import { Icon, Modal } from 'antd';
import { GetLoginUserInfo, Logout } from '../../Common/Auth';

import './top.scss';

class Top extends Component {
  state = { loginUser: GetLoginUserInfo() }
  hanldeLogout = () =>{
    let { history } = this.props;
    Modal.confirm({
      title: '提示',
      content: '您确认要退出吗？',
      okText: '退出',
      cancelText: '取消',
      onOk: () => {
        Logout();// 清理当前用户的相关信息
        history.push('/login');
      }
    })
  }
  render () {
    return (
      <Fragment>
        <div className="logo-wrap components-top">
          <a href="/">
            <h1 style={{color: '#fff', fontSize: '30px'}}>
              <Icon type="slack" />
              安心账后台管理系统
            </h1>
          </a>
        </div>
        <div className="user-wrap components-top">
          <div className="btn-group">
            <Icon type="user" />
            <span>{ this.state.loginUser && this.state.loginUser.username }</span>
          </div>
          <div className="btn-group" onClick={this.hanldeLogout}>
            <Icon type="logout" />
            登出
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Top