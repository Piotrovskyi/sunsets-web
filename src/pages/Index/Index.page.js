import React from 'react';
import './Index.styles.css';
import Map from '../../components/Map';

import { Layout } from 'antd';
import { Provider } from 'react-redux';
import MapSettings from '../../components/MapSettings';
import Footer from '../../components/Footer';

import MapNavigation from '../../components/MapNavigation';
import { ScreenSizeProvider } from '../../context/screenSizeContext';

const Index = ({ store }) => (
  <ScreenSizeProvider>
    <Provider store={store}>
      <Layout style={{ height: '100vh', overflowY: 'hidden' }}>
        <div className="map-responsive">
          <div className="map-responsive__header">
            <MapNavigation />
          </div>
          <div className="flex order map-responsive__map">
            <Map />
          </div>
          <div className="map-responsive__settings">
            <MapSettings />
          </div>
        </div>
        <Footer />
      </Layout>
    </Provider>
  </ScreenSizeProvider>
);

export default Index;
