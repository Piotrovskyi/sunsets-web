import React from 'react';
import './Footer.styles.css';

const Footer = () => (
  <footer class="footer">
    &copy Pavel Bernshtam, 2019-2020 using data from
    <a HREF="http://www.ims.gov.il/IMSEng/All_tahazit/Model%20based%20weather%20charts/">
      Israel Meteorological Service
    </a>{' '}
    and
    <a HREF="https://openweathermap.org/api">OpenWeather</a>
  </footer>
);

export default Footer;
