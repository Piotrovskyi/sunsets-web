import React from 'react';
import './Index.styles.css';
import Navigation from '../../components/Navigation';
import Map from '../../components/Map';

import {Layout} from 'antd';
import {Provider} from 'react-redux'

const {Content, Sider} = Layout;

const Index = ({store}) => (
    <Provider store={store}>
        <Layout>
            <Layout>
                <Content>
                    <Map/>
                </Content>
                <Sider style={{background: 'white'}} width={360}>
                    <Navigation/>
                </Sider>
            </Layout>
        </Layout>
    </Provider>
);

export default Index;
