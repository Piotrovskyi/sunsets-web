import React, { useEffect, useState } from 'react';
import 'ol/ol.css';
import { MAP_CONTAINER_ID } from '../../constants/map.constants';
import OpenLayerMap from '../OpenLayerMap';
import { useSelector } from 'react-redux';
import { selectFeaturesByTab } from '../../store/selectors';
import Spin from 'antd/es/spin';
import './Map.styles.css';

const center = [4050000, 3700000];
const zoom = 7.5;

const Map = () => {
  const [OLMap, setOLMap] = useState(null);
  const features = useSelector(selectFeaturesByTab);
  const loading = useSelector((state) => state.weather.loading);
  const loading2 = useSelector((state) => state.photoSpots.loading);

  useEffect(() => {
    setOLMap(new OpenLayerMap(center, zoom));
  }, []);

  useEffect(() => {
    if (OLMap) {
      OLMap.updateData(features);
    }
  }, [features, OLMap]);
  return (
    <div
      className="w-100% h-100"
      id={MAP_CONTAINER_ID}
      style={{ position: 'relative' }}
    >
      {(loading || loading2) && (
        <div className="map-loader">
          <Spin />
        </div>
      )}
    </div>
  );
};

export default Map;
