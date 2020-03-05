import React, {useMemo} from 'react';
import './Navigation.styles.css';
import {Tabs} from 'antd';
import PhotoSpotsContent from "../PhotoSpotsContent";
import WeatherContent from "../WetherContent";
import Icon from "../Icon";
import t from "../../utils/getTranstalion";
import {MAP_PHOTO_SPOTS_TAB_KEY, MAP_WEATHER_TAB_KEY} from "../../constants/map.constants";
import {useDispatch, useSelector} from "react-redux";
import {selectActiveMapTab} from "../../store/ui/ui.selectors";
import {getSetActiveMapTabAction} from "../../store/ui/ui.actions";

const {TabPane} = Tabs;


const Navigation = () => {
    const dispatch = useDispatch();
    const activeTab = useSelector(selectActiveMapTab);
    const setActiveTab = tab => dispatch(getSetActiveMapTabAction(tab));

    const logo = useMemo(() => <a href='#' className="d-flex p-3 h-100">
        <Icon
            className="logo-icon"
            iconName='logo'/>
    </a>, []);

    return (
        <div>
            <Tabs
                className="app-scratch-tab-navs"
                tabBarStyle={{"width": "100%", overflowY: "hidden"}}
                activeKey={activeTab}
                onChange={setActiveTab}
                tabBarExtraContent={logo}
            >
                <TabPane tab={t('navigation.weather')} key={MAP_WEATHER_TAB_KEY} className="py-4">
                    <WeatherContent/>
                </TabPane>
                <TabPane tab={t('navigation.photo_spots')} key={MAP_PHOTO_SPOTS_TAB_KEY} className="py-4">
                    <PhotoSpotsContent/>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Navigation;
