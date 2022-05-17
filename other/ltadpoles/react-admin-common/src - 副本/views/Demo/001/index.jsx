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

const DemoView = () => (
  <Layout>
    <div>
      <CustomBreadcrumb arr={['练习', '001']}></CustomBreadcrumb>
    </div>
    <div className="base-style">
      这是一个demo页面
      <button onClick={getUserInfo}>获取userInfo</button>
      <button onClick={testSendPost}>发请求</button>
    </div>
  </Layout>
);
export default DemoView;
