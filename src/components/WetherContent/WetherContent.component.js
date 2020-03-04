import React, {useCallback, useContext, useState} from 'react';
import './WeatherContent.styles.css';
import {CLOUDS_OPT, RAIN_OPT} from "../../constants/option.constants";
import DayPicker from "../DayPicker";
import ParametersSelect from "../ParametersSelect";
import {WeatherContext} from "../../context/WeatherContext";
import {Button, TimePicker} from "antd";
import moment from "moment";
import Title from "antd/lib/typography/Title";

const weatherTabParamOptions = [
    {
        value: CLOUDS_OPT,
        icon: "cloud",
        text: "Clouds"
    },
    {
        value: RAIN_OPT,
        icon: "cloud-drizzle",
        text: "Rain"
    }
];

const TIME_FORMAT = 'HH:mm';

const WeatherContent = () => {
    const {
        state: {
            day,
            time,
            param
        },
        mutations: {
            setDay,
            setTime,
            setParam
        }
    } = useContext(WeatherContext);
    const onSetOption = useCallback((e) => {
        setParam(e.target.value)
    }, []);
    const setNow = () => {
        setTime(moment().get('hours'));
        setDay(0)
    };
    const onChangeTime = time => {
        setTime(time.get('hours'));
    };

    const displayedTime = moment().set('hours', time).startOf('hour');

    return (
        <div style={{padding: '0 24px', textAlign: 'right'}}>
            <div className="d-flex justify-content-end mb-1">
                <Button className="mx-2" size="small" type="dashed" onClick={setNow}>Now</Button>
                <Title type="secondary" style={{fontSize: '16px'}} level={3}>Time</Title>
            </div>
            <DayPicker day={day} setDay={setDay}/>
            <TimePicker
                className="mt-3"
                style={{width: '86px'}}
                allowClear={false}
                value={displayedTime}
                defaultValue={moment(Date.now())}
                onChange={onChangeTime}
                format={TIME_FORMAT}
                minuteStep={60}
            />
            <ParametersSelect
                title="Weather"
                optionButtons={weatherTabParamOptions}
                currentOption={param}
                setOption={onSetOption}
            />
        </div>
    )
};

export default WeatherContent;
