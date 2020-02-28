import React, {useMemo} from 'react';
import './ParametersSelect.styles.css';
import {Radio} from "antd";


const optionMap = {
    CLOUDS: 'Clouds',
    SUNRISE: 'Sunrise',
    SUNSET: 'Sunset',
    THUNDER: 'Thunder',
};

const ParametersSelect = ({title, setOption, currentOption, optionButtons}) => {

    const Options = useMemo(() => optionButtons.map(
        ({
             value,
             img,
             alt,
             text,
        }) => <Radio.Button key={value} value={value}>{text}
            <span className="pl-3">
                <img src={img} alt={alt}/>
            </span>
        </Radio.Button>
    ),
        [currentOption, optionButtons]
    );

    return <div>
        <h2 className="">{title}</h2>
        <Radio.Group prefixCls="app-vertical" size="large" onChange={setOption} value={currentOption}>
            {Options}
        </Radio.Group>
    </div>;
}

export default ParametersSelect;
