import React from 'react';
import './Index.styles.css';

import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Map from '../../components/Map';

import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
const { Header, Content, Sider } = Layout;

const Index = () => (
  <Layout>
    <Layout>
      <Content>
        <Map />
      </Content>
      <Sider style={{ background: 'white' }} width={360}>
        <Navigation />
        <Button>sdfsd</Button>
      </Sider>
    </Layout>
  </Layout>
);

export default Index;
