import React, { useMemo } from 'react';
import './MapNavigation.styles.css';
import Menu from 'antd/es/menu';
import t from '../../utils/getTranstalion';
import {
  MAP_PHOTO_SPOTS_TAB_KEY,
  MAP_WEATHER_TAB_KEY,
} from '../../constants/map.constants';
import Icon from '../Icon';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveMapTab } from '../../store/ui/ui.selectors';
import { getSetActiveMapTabAction } from '../../store/ui/ui.actions';

const MapNavigation = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveMapTab);
  const setActiveTab = ({ key }) => dispatch(getSetActiveMapTabAction(key));
  const logo = useMemo(
    () => (
      <a href="/" className="d-flex p-3 h-100">
        <Icon className="logo-icon" iconName="logo" />
      </a>
    ),
    []
  );

  return (
    <aside className="d-flex bg-white">
      <Menu
        onClick={setActiveTab}
        selectedKeys={activeTab}
        className="w-100 custom-flex-menu"
        mode="horizontal"
      >
        <Menu.Item key={MAP_WEATHER_TAB_KEY}>
          {t('navigation.weather')}
        </Menu.Item>
        <Menu.Item key={MAP_PHOTO_SPOTS_TAB_KEY}>
          {t('navigation.photo_spots')}
        </Menu.Item>
      </Menu>
      {logo}
    </aside>
  );
};

export default MapNavigation;
