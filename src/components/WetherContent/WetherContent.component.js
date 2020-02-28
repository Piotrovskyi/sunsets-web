import React, {useCallback, useState} from 'react';
import './WeatherContent.styles.css';
import {CLOUDS_OPT, RAIN_OPT} from "../../constants/option.constants";
import CloudIcon from "../../assests/icons/cloud.svg";
import RainIcon from "../../assests/icons/cloud-drizzle.svg";
import DayPicker from "../DayPicker";
import ParametersSelect from "../ParametersSelect";
import {dayValuesMap} from "../../constants/days.constants";

const weatherTabParamOptions = [
    {
        value: CLOUDS_OPT,
        img: CloudIcon,
        alt: "Cloud",
        text: "Clouds"
    },
    {
        value: RAIN_OPT,
        img: RainIcon,
        alt: "Cloud drizzle",
        text: "Rain"
    }
];

const WeatherContent = () => {
    const [day, setDay] = useState(dayValuesMap.TODAY);
    const [option, setOption] = useState(CLOUDS_OPT);
    const onSetOption = useCallback((e) => setOption(e.target.value), []);
    return (
        <div style={{padding: '0 24px', textAlign: 'right'}}>
            <h3 className="time-title">Time</h3>
            <DayPicker day={day} setDay={setDay}/>
            <ParametersSelect
                title="Weather"
                optionButtons={weatherTabParamOptions}
                currentOption={option}
                setOption={onSetOption}
            />
        </div>
    )
};

export default WeatherContent;
