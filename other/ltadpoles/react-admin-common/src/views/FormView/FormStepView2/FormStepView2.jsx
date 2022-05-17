import React, { Component } from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import { Layout, Divider, Row, Col, Steps, Button, Form, Input, Select, Alert, Result } from 'antd';
import '@/style/view-style/form.scss';

const FormStepView2 = () => (
  <Layout>
    <div>
      <CustomBreadcrumb arr={['练习', '001']}></CustomBreadcrumb>
    </div>
    <div className="base-style">这是一个demo页面</div>
  </Layout>
);

export default FormStepView2;
