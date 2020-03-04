import React, {useCallback, useState} from 'react';
import './PhotoSpotsContent.styles.css';
import ParametersSelect from "../ParametersSelect";
import {CLOUDS_OPT, SUNRISE_OPT, SUNSET_OPT, THUNDER_OPT} from "../../constants/option.constants";
import DayPicker from "../DayPicker";
import {dayValuesMap} from "../../constants/days.constants";
import Title from "antd/lib/typography/Title";
import t from "../../utils/getTranstalion";

const spotTabParamOptions = [
    {
        value: CLOUDS_OPT,
        icon: "cloud",
        text: t('options.clouds')
    }, {
        value: SUNRISE_OPT,
        icon: "sunrise",
        text: t('options.sunrise')
    }, {
        value: SUNSET_OPT,
        icon: "sunset",
        text: t('options.sunset')
    }, {
        value: THUNDER_OPT,
        icon: "cloud-lightning",
        text: t('options.thunder')
    },
];

const PhotoSpotsContent = () => {
    const [day, setDay] = useState(dayValuesMap.TODAY);
    const [option, setOption] = useState(CLOUDS_OPT);
    const onSetOption = useCallback((e) => setOption(e.target.value), []);

    return (
        <div style={{padding: '0 24px', textAlign: 'right'}}>
            <Title type="secondary" style={{fontSize: '16px' }} level={3}>{t('general.time')}</Title>
            <DayPicker day={day} setDay={setDay}/>
            <ParametersSelect
                title={t('navigation.photo_spots')}
                optionButtons={spotTabParamOptions}
                currentOption={option}
                setOption={onSetOption}
            />
        </div>
    );
};

export default PhotoSpotsContent;
