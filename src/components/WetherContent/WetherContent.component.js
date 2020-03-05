import React, {useCallback, useEffect, useMemo} from 'react';
import './WeatherContent.styles.css';
import DayPicker from "../DayPicker";
import ParametersSelect from "../ParametersSelect";
import {Button, TimePicker} from "antd";
import moment from "moment";
import Title from "antd/lib/typography/Title";
import {useDispatch} from "react-redux"
import t from "../../utils/getTranstalion";
import {useSelector} from 'react-redux';
import {selectWeatherDay, selectWeatherParam, selectWeatherTime} from "../../store/weather/weather.selectors";
import {
    getSetWeatherDayAction,
    getSetWeatherParamAction,
    getSetWeatherTimeAction
} from "../../store/weather/weather.actions";
import {getFetchWeatherParamsAction} from "../../store/weatherParams/weatherParams.actions";
import {
    selectParamsLoading,
    selectPreparedParams
} from "../../store/weatherParams/weatherParams.selectors";

const TIME_FORMAT = 'HH:mm';

const WeatherContent = () => {
    const dispatch = useDispatch();
    const day = useSelector(selectWeatherDay);
    const time = useSelector(selectWeatherTime);
    const param = useSelector(selectWeatherParam);
    const params = useSelector(selectPreparedParams);
    const paramsLoading = useSelector(selectParamsLoading);
    const setDay = day => dispatch(getSetWeatherDayAction(day));
    const setTime = time => dispatch(getSetWeatherTimeAction(time));
    const setParam = param => dispatch(getSetWeatherParamAction(param));

    useEffect(() => {
        dispatch(getFetchWeatherParamsAction());
    }, []);

    const onSetParam = useCallback((e) => {
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
                    <DayPicker day={day} setDay={setDay}/>
                </div>
            </div>
            <div className="pl-3">
                <ParametersSelect
                    loading={paramsLoading}
                    title={t('navigation.weather')}
                    optionButtons={params}
                    currentOption={param}
                    setOption={onSetParam}
                />
            </div>
        </div>
    )
};

export default WeatherContent;
