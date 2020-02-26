import React, { Component } from 'react';
import 'ol/ol.css';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
// import OlLayerTile from 'ol/layer/Tile';
// import OlSourceOSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';

import GeoJSON from 'ol/format/GeoJSON';
import VectorSource from 'ol/source/Vector';
import { Fill, Stroke, Style } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';

// const data = require('../../data.json');

// console.log(data)

let geoJSON = new GeoJSON();

class PublicMap extends Component {
  constructor(props) {
    super(props);

    const center = [4000000, 3800000];
    const zoom = 8;

    this.state = { center, zoom };

    const vectorLoader = function(extent, resolution, projection) {
      const url = 'https://cors-anywhere.herokuapp.com/https://israel-sky.s3-eu-west-1.amazonaws.com/1/18/UGRD.json';
      const xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {
          // XMLHttpRequest.DONE == 4
          if (xmlhttp.status === 200) {
            let features = geoJSON.readFeatures(xmlhttp.responseText, {
              featureProjection: projection,
            });
            source.addFeatures(features);
          }
        }
      };

      xmlhttp.open('GET', url, true);
      xmlhttp.send();
    };

    const source = new VectorSource({
      loader: vectorLoader,
      format: geoJSON,
    });

    const styleFunction = function(feature, resolution) {
      return new Style({
        stroke: new Stroke({
          color: 'gray',
          width: 1,
        }),
        fill: new Fill({
          color: feature.getProperties().color,
        }),
      });
    };

    const layer = new VectorLayer({
      source: source,
      style: styleFunction,
    });

    this.olmap = new OlMap({
      target: null,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        layer,
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
