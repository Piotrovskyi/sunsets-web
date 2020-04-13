import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import 'ol/ol.css';
import { MAP_CONTAINER_ID } from '../../constants/map.constants';
import OpenLayerMap from '../OpenLayerMap';
import { useSelector, useDispatch } from 'react-redux';
import { selectFeaturesByTab } from '../../store/selectors';
import Spin from 'antd/es/spin';
import _ from 'lodash';
import './Map.styles.css';

const center = [4050000, 3700000];
const zoom = 7.5;

const beautifyText = (text) => {
  return (
    <div>
      {text.split('. ').map((el) => (
        <div key={el}>{el}</div>
      ))}
    </div>
  );
};

const Map = () => {
  const [OLMap, setOLMap] = useState(null);
  const features = useSelector(selectFeaturesByTab);
  const loading = useSelector((state) => state.weather.loading);
  const loading2 = useSelector((state) => state.photoSpots.loading);
  const currentTab = useSelector((state) => state.ui.activeMapTab);
  const [featureText, setFeatureTextState] = useState(null);

  const setFeatureText = useRef(
    _.throttle(
      (feature) => setFeatureTextState(_.get(feature, 'values_.text')),
      400
    )
  );

  useEffect(() => {
    setOLMap(new OpenLayerMap(center, zoom, setFeatureText.current));
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
      {featureText && (
        <div className="feature-text-container">
          {beautifyText(featureText)}
        </div>
      )}
    </div>
  );
};

export default Map;
