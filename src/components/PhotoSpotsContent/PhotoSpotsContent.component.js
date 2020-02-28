import React, {useCallback, useState} from 'react';
import './PhotoSpotsContent.styles.css';
import ParametersSelect from "../ParametersSelect";
import {CLOUDS_OPT, SUNRISE_OPT, SUNSET_OPT, THUNDER_OPT} from "../../constants/option.constants";
import CloudIcon from "../../assests/icons/cloud.svg";
import SunriseIcon from "../../assests/icons/sunrise.svg";
import SunsetIcon from "../../assests/icons/sunset.svg";
import ThunderIcon from "../../assests/icons/cloud-lightning.svg";
import DayPicker from "../DayPicker";
import {dayValuesMap} from "../../constants/days.constants";

const spotTabParamOptions = [
    {
        value: CLOUDS_OPT,
        img: CloudIcon,
        alt: "Cloud",
        text: "Clouds"
    }, {
        value: SUNRISE_OPT,
        img: SunriseIcon,
        alt: "Sunrise",
        text: "Sunrise"
    }, {
        value: SUNSET_OPT,
        img: SunsetIcon,
        alt: "Sunset",
        text: "Sunset"
    }, {
        value: THUNDER_OPT,
        img: ThunderIcon,
        alt: "Thunder",
        text: "Thunder"
    },
];

const PhotoSpotsContent = () => {
    const [day, setDay] = useState(dayValuesMap.TODAY);
    const [option, setOption] = useState(CLOUDS_OPT);
    const onSetOption = useCallback((e) => setOption(e.target.value), []);

    return (
        <div style={{padding: '0 24px', textAlign: 'right'}}>
            <h3 className="time-title">Time</h3>
            <DayPicker day={day} setDay={setDay}/>
            <ParametersSelect
                title="Photo spots"
                optionButtons={spotTabParamOptions}
                currentOption={option}
                setOption={onSetOption}
            />
        </div>
    );
};

export default PhotoSpotsContent;
