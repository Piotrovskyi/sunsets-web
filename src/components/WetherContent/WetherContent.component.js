import React, {useCallback, useContext, useMemo} from 'react';
import './WeatherContent.styles.css';
import {CLOUDS_OPT, RAIN_OPT} from "../../constants/option.constants";
import DayPicker from "../DayPicker";
import ParametersSelect from "../ParametersSelect";
import {WeatherContext} from "../../context/WeatherContext";
import {Button, TimePicker} from "antd";
import moment from "moment";
import Title from "antd/lib/typography/Title";
import t from "../../utils/getTranstalion";

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
        <div style={{padding: '0 24px', textAlign: 'right'}}>
            <div className="d-flex justify-content-end mb-1">
                <Button className="mx-2" size="small" type="dashed" onClick={setNow}>{t('general.now')}</Button>
                <Title type="secondary" style={{fontSize: '16px'}} level={3}>{t('general.time')}</Title>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <TimePicker
                    className="my-1"
                    style={{width: '86px'}}
                    allowClear={false}
                    value={displayedTime}
                    defaultValue={moment(Date.now())}
                    onChange={onChangeTime}
                    format={TIME_FORMAT}
                    minuteStep={60}
                />
                <DayPicker day={day} setDay={setDay}/>
            </div>
            <ParametersSelect
                title={t('navigation.weather')}
                optionButtons={weatherTabParamOptions}
                currentOption={param}
                setOption={onSetOption}
            />
        </div>
    )
};

export default WeatherContent;
