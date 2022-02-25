import React, { Component } from 'react';
import { Layout, Input, Icon, Form, Button, Divider, message, notification } from 'antd';
import { withRouter } from 'react-router-dom';
import { setToken } from '@/utils/auth.js';
import '@/style/view-style/login.scss';
import userService from '@/api/userService.js';

class Login extends Component {
  state = {
    loading: false,
  };

  enterLoading = () => {
    this.setState({
      loading: true,
    });
  };

  // 处理点击登陆按钮之后发生的事情
  handleSubmit = e => {
    e.preventDefault(); // 阻止默认事件
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        let { username, password } = values;
        const res = await userService.login(username, password);
        if (res.data.result) {
          setToken(res.data.token); // 登陆成功，设置token到cookie中
          const auth = username == 'admin' ? 1 : 0;
          this.enterLoading();
          localStorage.setItem('user', JSON.stringify({ username, auth })); // 保存用户信息
          this.timer = setTimeout(() => {
            message.success(res.data.msg); // 登陆成功提示
            this.props.history.push('/');
          }, 1000);
        } else {
          message.error(res.data.msg); // 登陆失败提示
        }
      }
    });
  };

  toRegister = () => {
    this.props.history.push('/register');
  };

  componentDidMount() {
    notification.open({
      message: '欢迎使用后台管理平台',
      duration: null,
      description: '账号 admin(管理员) 其他(游客) 密码随意',
    });
  }

  componentWillUnmount() {
    notification.destroy();
    this.timer && clearTimeout(this.timer);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout className="login animated fadeIn">
        <div className="model">
          <div className="login-form">
            <h3>后台管理系统</h3>
            <Divider />
            <Form onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入用户名!' }],
                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码' }],
                })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />)}
              </Form.Item>
              <a onClick={this.toRegister}>我要注册</a>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Form.create()(Login));
