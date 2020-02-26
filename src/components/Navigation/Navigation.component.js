import React, { useState } from 'react';
import './Navigation.styles.css';
import { Tabs, Radio } from 'antd';
import Card from '../Card/Card.component';

const { TabPane } = Tabs;

const Navigation = () => {
  const [day, setDay] = useState('0');

  return (
    <Tabs defaultActiveKey="2">
      <TabPane tab="Weather" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Photo spots" key="2">
        <div style={{ padding: '0 24px', textAlign: 'right' }}>
          <div className="time-title">Time</div>
          <Radio.Group onChange={e => setDay(e.target.value)} value={day} className="day-control">
            <Radio.Button value="2">After Tomorrow</Radio.Button>
            <Radio.Button value="1">Tomorrow</Radio.Button>
            <Radio.Button value="0">Today</Radio.Button>
          </Radio.Group>
          <div className="photo-spots">Photo spots</div>
          <Card>Clouds</Card>
          <Card>Sunrize</Card>
          <Card>Sunset</Card>
          <Card>Thunder</Card>
        </div>
      </TabPane>
    </Tabs>
  );
};

export default Navigation;
