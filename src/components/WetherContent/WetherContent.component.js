import React, {useCallback, useContext, useEffect, useMemo} from 'react';
import './WeatherContent.styles.css';
import {CLOUDS_OPT, RAIN_OPT} from "../../constants/option.constants";
import DayPicker from "../DayPicker";
import ParametersSelect from "../ParametersSelect";
import {WeatherContext} from "../../context/WeatherContext";
import {Button, TimePicker} from "antd";
import moment from "moment";
import Title from "antd/lib/typography/Title";
import { useDispatch } from "react-redux"
import t from "../../utils/getTranstalion";
import {REQUEST} from "../../constants/saga.constants";
import {fetchWeatherParamsTypes} from "../../store/weatherParams/weatherParams.constants";

const weatherTabParamOptions = [
    {
        value: CLOUDS_OPT,
        icon: "cloud",
        text: t('options.clouds')
    },
    {
        value: RAIN_OPT,
        icon: "cloud-drizzle",
        text: t('options.rain')
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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: fetchWeatherParamsTypes[REQUEST]})
    }, []);

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

    const displayedTime = useMemo(() => moment().set('hours', time).startOf('hour'), [time]);

    return (
        <div className="pl-2 pr-4 text-right">
            <div className="d-flex justify-content-end mb-1">
                <Button className="mx-3" size="small" type="dashed" onClick={setNow}>{t('general.now')}</Button>
                <Title type="secondary" style={{fontSize: '16px'}} level={3}>{t('general.time')}</Title>
            </div>
            <div className="d-flex justify-content-end align-items-center flex-wrap-reverse">
                <TimePicker
                    className="mt-1 ml-3"
                    style={{width: '86px'}}
                    allowClear={false}
                    value={displayedTime}
                    defaultValue={moment(Date.now())}
                    onChange={onChangeTime}
                    format={TIME_FORMAT}
                    minuteStep={60}
                />
                <div className="ml-auto">
                    <DayPicker  day={day} setDay={setDay}/>
                </div>
            </div>
            <div className="pl-3">
                <ParametersSelect
                    title={t('navigation.weather')}
                    optionButtons={weatherTabParamOptions}
                    currentOption={param}
                    setOption={onSetOption}
                />
            </div>
        </div>
    )
};

export default WeatherContent;
