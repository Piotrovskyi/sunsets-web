import React, {useEffect, useState} from 'react';
import 'ol/ol.css';
import {MAP_CONTAINER_ID} from "../../constants/map.constants";
import OpenLayerMap from "../OpenLayerMap";
import {useSelector} from "react-redux";
import {selectFeaturesByTab} from "../../store/selectors";

const center = [4050000, 3700000];
const zoom = 7.5;

const Map = () => {
    const [OLMap, setOLMap] = useState(null);
    const features = useSelector(selectFeaturesByTab);
    useEffect(() => {
        setOLMap(new OpenLayerMap(center, zoom));
    }, []);

    useEffect(() => {
        if (OLMap) {
            OLMap.updateData(features)
        }
    }, [features, OLMap]);
    return <div className="w-100% h-100"  id={MAP_CONTAINER_ID}/>
};

export default Map;
