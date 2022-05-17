import React from 'react';
import { Layout, Divider } from 'antd';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';

const DemoView = () => (
  <Layout>
    <div>
      <CustomBreadcrumb arr={['例子', '练习-002']}></CustomBreadcrumb>
    </div>
    <div></div>
  </Layout>
);

export default DemoView;
