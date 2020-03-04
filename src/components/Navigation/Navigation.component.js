import React, {useMemo} from 'react';
import './Navigation.styles.css';
import {Tabs} from 'antd';
import PhotoSpotsContent from "../PhotoSpotsContent";
import WeatherContent from "../WetherContent";
import Icon from "../Icon";

const {TabPane} = Tabs;



const Navigation = () => {
    const logo = useMemo(() => <a href='#' className="d-flex p-3 h-100"><Icon className="logo-icon" iconName='logo'/></a>, []);

    return (
        <div>
            <Tabs
                className="app-scratch-tab-navs"
                tabBarStyle={{"width": "100%"}}
                defaultActiveKey="2"
                tabBarExtraContent={logo}
            >
                <TabPane tab="Weather" key="1" className="py-4">
                    <WeatherContent/>
                </TabPane>
                <TabPane tab="Photo spots" key="2" className="py-4">
                    <PhotoSpotsContent />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Navigation;
