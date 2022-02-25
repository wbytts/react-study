import React from 'react';
import { Layout, Divider, Table } from 'antd';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const DemoView = () => (
  <Layout>
    <CustomBreadcrumb arr={['例子', '练习-001']}></CustomBreadcrumb>
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  </Layout>
);

export default DemoView;
