import React, { Component } from 'react';
import { Layout, Input, Icon, Form, Button, Divider, message, notification } from 'antd';
import { withRouter } from 'react-router-dom';
import { setToken } from '@/utils/auth.js';
import '@/style/view-style/register.scss';
import userService from '@/api/userService.js';

class Register extends Component {
  state = {
    loading: false,
  };

  enterLoading = () => {
    this.setState({
      loading: true,
    });
  };

  // 处理点击注册按钮之后发生的事情
  handleSubmit = e => {
    console.log('点击了注册按钮');
    e.preventDefault(); // 阻止默认事件
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('输入表单参数', values);
        // const params = {
        //   ...values
        // };
        userService.userRegister(values).then(res => {
          console.log('注册返回结果', res);

          if (res.data.result) {
            console.log('注册成功');
            // 注册成功
            message.success(res.data.msg); // 注册成功提示
            //跳回的登录页
            this.props.history.push('/login');
          } else {
            console.log('注册失败');
            // 注册失败
            message.error(res.data.msg); // 登陆成功提示
            // 清空注册表单
          }
        });
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
      <Layout className="register animated fadeIn">
        <div className="model">
          <div className="register-form">
            <h3>后台管理系统 - 用户注册</h3>
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
                })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password2', {
                  rules: [{ required: true, message: '请再次密码' }],
                })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请再次输入密码" />)}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="register-form-button" loading={this.state.loading}>
                  注册
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Form.create()(Register));
