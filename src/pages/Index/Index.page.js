import React from 'react';
import './Index.styles.css';
import Navigation from '../../components/Navigation';
import Map from '../../components/Map';

import {Layout} from 'antd';
import {WeatherDataProvider} from "../../context/WeatherContext";

const {Content, Sider} = Layout;

const Index = () => (
    <Layout>
        <Layout>
            <WeatherDataProvider>
                <Content>
                    <Map/>
                </Content>
                <Sider style={{background: 'white'}} width={360}>
                    <Navigation/>
                </Sider>
            </WeatherDataProvider>
        </Layout>
    </Layout>
);

export default Index;
