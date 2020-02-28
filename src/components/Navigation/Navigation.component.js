import React, {useMemo, useState} from 'react';
import './Navigation.styles.css';
import {Tabs, Radio} from 'antd';
import logoIcon from '../../assests/icons/logo.svg';
import PhotoSpotsContent from "../PhotoSpotsContent";
import WeatherContent from "../WetherContent";

const {TabPane} = Tabs;



const Navigation = () => {
    const logo = useMemo(() => <figure className="px-3 d-inline-block"><img src={logoIcon} alt="logo"/></figure>, []);

    return (
        <div>
            <Tabs
                className="app-scratch-tab-navs"
                tabBarStyle={{"width": "100%"}}
                defaultActiveKey="2"
                tabBarExtraContent={logo}
            >
                <TabPane tab="Weather" key="1">
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
