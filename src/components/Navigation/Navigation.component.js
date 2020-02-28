import React, {useMemo, useState} from 'react';
import './Navigation.styles.css';
import {Tabs, Radio} from 'antd';
import logoIcon from '../../assests/icons/logo.svg';
import ParametersSelect from "../ParametersSelect";

const {TabPane} = Tabs;

const Navigation = () => {
    const logo = useMemo(() => <figure className="px-3 d-inline-block"><img src={logoIcon} alt="logo"/></figure>, []);
    const [day, setDay] = useState('0');

    return (
        <div>
            <Tabs
                className="app-scratch-tab-navs"
                tabBarStyle={{"width": "100%"}}
                defaultActiveKey="2"
                tabBarExtraContent={logo}
            >
                <TabPane tab="Weather" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Photo spots" key="2" className="py-4">
                    <div style={{padding: '0 24px', textAlign: 'right'}}>
                        <h3 className="time-title">Time</h3>
                        <Radio.Group size="large" onChange={e => setDay(e.target.value)} value={day}
                                     className="day-control">
                            <Radio.Button value="2">After Tomorrow</Radio.Button>
                            <Radio.Button value="1">Tomorrow</Radio.Button>
                            <Radio.Button value="0">Today</Radio.Button>
                        </Radio.Group>
                        <ParametersSelect/>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Navigation;
