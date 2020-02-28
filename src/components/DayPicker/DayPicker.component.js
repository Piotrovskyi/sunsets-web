import React from 'react';
import './DayPicker.styles.css';
import {Radio} from "antd";
import {AFTER_TOMORROW, dayValuesMap, TODAY, TOMORROW} from "../../constants/days.constants";

const DayPicker = ({day, setDay}) =>
    <Radio.Group
        size="large"
        onChange={e => setDay(e.target.value)}
        value={day}
        className="day-control"
    >
        <Radio.Button value={dayValuesMap.AFTER_TOMORROW}>{AFTER_TOMORROW}</Radio.Button>
        <Radio.Button value={dayValuesMap.TOMORROW}>{TOMORROW}</Radio.Button>
        <Radio.Button value={dayValuesMap.TODAY}>{TODAY}</Radio.Button>
    </Radio.Group>;

export default DayPicker;
