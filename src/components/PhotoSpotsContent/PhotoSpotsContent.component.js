import React, {useCallback} from 'react';
import './PhotoSpotsContent.styles.css';
import ParametersSelect from "../ParametersSelect";
import {CLOUDS_OPT, SUNRISE_OPT, SUNSET_OPT, THUNDER_OPT} from "../../constants/option.constants";
import DayPicker from "../DayPicker";
import Title from "antd/lib/typography/Title";
import t from "../../utils/getTranstalion";
import {useDispatch, useSelector} from "react-redux";
import {selectPhotoSpotsDay, selectPhotoSpotsParam} from "../../store/photoSpots/photoSpots.selectors";
import {getSetPhotoSpotsDayAction, getSetPhotoSpotsParamAction} from "../../store/photoSpots/photoSpots.actions";

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
    const dispatch = useDispatch();
    const day = useSelector(selectPhotoSpotsDay);
    const param = useSelector(selectPhotoSpotsParam);
    const setDay = day => dispatch(getSetPhotoSpotsDayAction(day));
    const setParam = param => dispatch(getSetPhotoSpotsParamAction(param));
    const onSetParam = useCallback((e) => setParam(e.target.value), []);

    return (
        <div className="pl-2 pr-4 text-right">
            <Title type="secondary" style={{fontSize: '16px' }} level={3}>{t('general.time')}</Title>
            <DayPicker day={day} setDay={setDay}/>
            <div className="pl-3">
                <ParametersSelect
                    title={t('navigation.photo_spots')}
                    optionButtons={spotTabParamOptions}
                    currentOption={param}
                    setOption={onSetParam}
                />
            </div>
        </div>
    );
};

export default PhotoSpotsContent;
