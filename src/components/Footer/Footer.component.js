import React from 'react';
import './Footer.styles.css';
import { Layout } from 'antd';

const Footer = () => (
  <Layout.Footer class="footer">
    (c) Idea and algorithms - Pavel Bernshtam, website and design -{' '}
    <a target="_blank" HREF="https://yojji.io">Yojji</a>, forecast data -{' '}
    <a target="_blank" HREF="http://www.ims.gov.il/IMSEng/All_tahazit/Model%20based%20weather%20charts/">
      Israel Meteorological Service
    </a>{' '}
    and <a target="_blank" HREF="https://openweathermap.org/api">OpenWeather</a>
  </Layout.Footer>
);

export default Footer;
