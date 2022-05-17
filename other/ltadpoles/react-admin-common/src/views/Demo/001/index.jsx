import React from 'react';
import { Layout, Divider } from 'antd';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import userService from '@/api/userService.js';

// 获取当前登陆用户的信息
const getUserInfo = async () => {
  const userInfo = await userService.getUserInfo();
  console.log('用户信息', userInfo);
};

const testSendPost = async () => {};

const testRegister = async () => {
  const params = {
    username: '辣辣',
    password: '123',
    password2: '123',
  };
  userService.userRegister(params).then(res => {
    console.log('注册接口返回:', res);
  });
};

const DemoView = () => (
  <Layout>
    <div>
      <CustomBreadcrumb arr={['练习', '001']}></CustomBreadcrumb>
    </div>
    <div className="base-style">
      这是一个demo页面
      <button onClick={getUserInfo}>获取userInfo</button>
      <button onClick={testSendPost}>发请求</button>
      <button onClick={testRegister}>测试注册请求</button>
    </div>
  </Layout>
);
export default DemoView;
