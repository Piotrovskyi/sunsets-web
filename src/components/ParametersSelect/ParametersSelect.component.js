import React, {useCallback, useState} from 'react';
import './ParametersSelect.styles.css';
import {Radio} from "antd";
import CloudIcon from '../../assests/icons/cloud.svg'
import SunriseIcon from '../../assests/icons/sunrise.svg'
import SunsetIcon from '../../assests/icons/sunset.svg'
import ThunderIcon from '../../assests/icons/cloud-lightning.svg'

const optionMap = {
    CLOUDS: 'Clouds',
    SUNRISE: 'Sunrise',
    SUNSET: 'Sunset',
    THUNDER: 'Thunder',
};

const ParametersSelect = () => {
    const [option, setOption] = useState(optionMap.CLOUDS);
    const onSetOption = useCallback((e) => setOption(e.target.value), []);

    return <div>
        <h2 className="">Photo spots</h2>
        <Radio.Group prefixCls="app-vertical" size="large" onChange={onSetOption} value={option}>
            <Radio.Button value={optionMap.CLOUDS}>Clouds
                <span className="pl-3">
                    <img src={CloudIcon} alt="Clouds"/>
                </span>
            </Radio.Button>
            <Radio.Button value={optionMap.SUNRISE}>Sunrise
                <span className="pl-3">
                    <img src={SunriseIcon} alt="Sunrise"/>
                </span>
            </Radio.Button>
            <Radio.Button value={optionMap.SUNSET}>Sunset
                <span className="pl-3">
                    <img src={SunsetIcon} alt="Sunset"/>
                </span>
            </Radio.Button>
            <Radio.Button value={optionMap.THUNDER}>Thunder
                <span className="pl-3">
                    <img src={ThunderIcon} alt="Thunder"/>
                </span>
            </Radio.Button>
        </Radio.Group>
    </div>;
}

export default ParametersSelect;
