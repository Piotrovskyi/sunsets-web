import React from 'react';
import './OpenLayerMap.styles.css';
import 'ol/ol.css';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import {OSM} from 'ol/source';

import GeoJSON from 'ol/format/GeoJSON';
import VectorSource from 'ol/source/Vector';
import {Fill, Stroke, Style} from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import {MAP_CONTAINER_ID} from "../../constants/map.constants";

let geoJSON = new GeoJSON({featureProjection: 'EPSG:3857'});

export default class OpenLayerMap {
    olmap = null;
    coordinates = null;
    layer = null;

    constructor(center, zoom) {

        this.coordinates = {center, zoom};

        const source = new VectorSource({
            features: null,
            state: 'ready',
            format: geoJSON,
        });

        const styleFunction = function (feature, resolution) {
            return new Style({
                stroke: new Stroke({
                    color: 'blue',
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

        this.olmap.setTarget(MAP_CONTAINER_ID);

    }

    updateData(features) {
        const preparedData = geoJSON.readFeatures(features);
        const source = new VectorSource({
            features: preparedData,
            state: 'ready',
            format: geoJSON,
        });
        this.layer.setSource(source);
    }

    get coords() {
        const view = this.olmap.getView();
        const center = view.getCenter();
        const zoom = view.getZoom();
        return {center, zoom};
    }

    set coords({center, zoom}) {
        this.olmap.getView().setCenter(center);
        this.olmap.getView().setZoom(zoom);
    }
};
