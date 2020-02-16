import React from 'react';
import './Index.styles.css';

import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Map from '../../components/Map';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;

const Index = () => (
  <Layout>
    <Layout>
      <Sider>Sider</Sider>
      <Content><Map /></Content>
    </Layout>
  </Layout>
);

export default Index;
