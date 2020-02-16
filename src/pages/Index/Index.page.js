import React from 'react';
import './Index.styles.css';

import {
  interaction,
  layer,
  custom,
  control, //name spaces
  Interactions,
  Overlays,
  Controls, //group
  Map,
  Layers,
  Overlay,
  Util, //objects
} from 'react-openlayers';

import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation/Navigation.component';

const Index = () => (
  <>
    <Navigation />

    <Map view={{ center: [0, 0], zoom: 2 }}>
      <Layers>
        <layer.Tile />
      </Layers>
    </Map>

    <Footer />
  </>
);

export default Index;
