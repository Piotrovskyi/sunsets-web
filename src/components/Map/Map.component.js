import React, {useContext, useEffect, useState} from 'react';
import 'ol/ol.css';
import {MAP_CONTAINER_ID} from "../../constants/map.constants";
import OpenLayerMap from "../OpenLayerMap";
import {WeatherContext} from "../../context/WeatherContext";

const center = [4000000, 3800000];
const zoom = 8;

const Map = () => {
    const [OLMap, setOLMap] = useState(null);

    const {state: {features}, mutations: {fetchFeatures}} = useContext(WeatherContext);
    useEffect(() => {
        fetchFeatures();
        setOLMap(new OpenLayerMap(center, zoom));
    }, []);

    useEffect(() => {
        if (features) {
            OLMap.updateData(features)
        }
    }, [features]);
    return <div id={MAP_CONTAINER_ID} style={{width: '100%', height: '100vh'}}/>
};

export default Map;
