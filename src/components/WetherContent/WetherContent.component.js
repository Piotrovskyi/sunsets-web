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
    const [timePickerValue, serTimePickerValue] = useState(moment());
    const onSetOption = useCallback((e) => {
        setParam(e.target.value)
    }, []);
    const setNow = () => {
        // todo fix duplication of time source
        serTimePickerValue(moment());
        setTime(moment().get('hours'));
        setDay(0)
    };
    const onChangeTime = time => {
        // todo fix duplication of time source(2)
        serTimePickerValue(time);
        setTime(time.get('hours'));
    };

    return (
        <div style={{padding: '0 24px', textAlign: 'right'}}>
            <div className="d-flex justify-content-end mb-1">
                <Button className="mx-2" size="small" type="dashed" onClick={setNow}>Now</Button>
                <Title type="secondary" style={{fontSize: '16px'}} level={3}>Time</Title>
            </div>
            <DayPicker day={day} setDay={setDay}/>
            <TimePicker
                value={timePickerValue}
                defaultValue={moment(Date.now())}
                onChange={onChangeTime}
                format={TIME_FORMAT}
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
