import React from 'react';
import './Footer.styles.css';
import { Layout } from 'antd';

const Footer = () => (
  <Layout.Footer className="footer">
    (c) Idea and algorithms - Pavel Bernshtam, website and design -{' '}
    <a target="_blank" href="https://yojji.io" rel="noopener noreferrer">Yojji</a>, forecast data -{' '}
    <a target="_blank" href="http://www.ims.gov.il/IMSEng/All_tahazit/Model%20based%20weather%20charts/" rel="noopener noreferrer">
      Israel Meteorological Service
    </a>{' '}
    and <a target="_blank" href="https://openweathermap.org/api" rel="noopener noreferrer">OpenWeather</a>
  </Layout.Footer>
);

export default Footer;
