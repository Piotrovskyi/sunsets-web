import React, { Component } from 'react';
import 'ol/ol.css';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOSM from 'ol/source/OSM';

class PublicMap extends Component {
  constructor(props) {
    super(props);

    const center = [4000000, 3800000];
    const zoom = 8;

    this.state = { center, zoom };

    this.olmap = new OlMap({
      target: null,
      layers: [
        new OlLayerTile({
          source: new OlSourceOSM(),
        }),
      ],
      view: new OlView({
        center,
        zoom,
      }),
    });
  }

  updateMap() {
    this.coords = this.state;
  }

  componentDidMount() {
    this.olmap.setTarget('map');

    // Listen to map changes
    this.olmap.on('moveend', () => {
      this.setState(this.coords);
    });
  }

  get coords() {
    const view = this.olmap.getView();
    const center = view.getCenter();
    const zoom = view.getZoom();
    return { center, zoom };
  }

  set coords({ center, zoom }) {
    this.olmap.getView().setCenter(center);
    this.olmap.getView().setZoom(zoom);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { center, zoom } = this.coords;
    return !(center === nextState.center && zoom === nextState.zoom);
  }

  render() {
    this.updateMap(); // Update map on render?
    return <div id="map" style={{ width: '100%', height: '100vh' }} />;
  }
}

export default PublicMap;
