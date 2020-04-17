import './OpenLayerMap.styles.css';
import 'ol/ol.css';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';

import GeoJSON from 'ol/format/GeoJSON';
import VectorSource from 'ol/source/Vector';
import { Fill, Stroke, Style } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import { MAP_CONTAINER_ID } from '../../constants/map.constants';

let geoJSON = new GeoJSON({ featureProjection: 'EPSG:3857' });

export default class OpenLayerMap {
  olmap = null;
  coordinates = null;
  layer = null;

  constructor(center, zoom, handleHover) {
    this.coordinates = { center, zoom };
    this.handleHover = handleHover;

    const source = new VectorSource({
      features: null,
      state: 'ready',
      format: geoJSON,
    });

    const styleFunction = function (feature) {
      return new Style({
        stroke: new Stroke({
          color: '#555555',
          width: 1,
        }),
        fill: new Fill({
          color: feature.getProperties().color,
        }),
      });
    };

    this.layer = new VectorLayer({
      source: source,
      style: styleFunction,
    });

    this.olmap = new OlMap({
      target: null,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        this.layer,
      ],
      view: new OlView({
        center,
        zoom,
      }),
    });

    this.olmap.on('pointermove', (evt) => {
      if (evt.dragging) {
        return;
      }
      const pixel = this.olmap.getEventPixel(evt.originalEvent);
      this.displayFeatureInfo(pixel)
    });

    this.olmap.setTarget(MAP_CONTAINER_ID);
  }

  displayFeatureInfo(pixel) {
    const feature = this.olmap.forEachFeatureAtPixel(pixel, function(feature) {
      return feature;
    });

    this.handleHover(feature)
  };

  updateData(features) {
    const source = new VectorSource({
      features: features ? geoJSON.readFeatures({ ...features }) : null,
      format: geoJSON,
    });
    this.layer.setSource(source);
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
}
