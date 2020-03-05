import React, {useMemo} from 'react';
import './ParametersSelect.styles.css';
import {Radio} from "antd";
import Title from "antd/lib/typography/Title";
import Icon from "../Icon";
import Spin from "antd/es/spin";

const ParametersSelect = ({title, setOption, currentOption, optionButtons, loading}) => {

    const Options = useMemo(() => optionButtons.map(
        ({
             value,
             icon,
             text,
        }) => <Radio.Button key={value} value={value} >
            <span className="d-flex justify-content-end align-items-center">
                {text}
                <span className="pl-3 d-inline-flex">
                    <Icon iconName={icon}/>
                </span>
            </span>
        </Radio.Button>
    ),
        [currentOption, optionButtons]
    );

    return <div className="mt-5">
        <Title level={2} style={{fontSize: '20px'}}>{title}</Title>
        {(!!loading && <Spin/>)}
        <Radio.Group prefixCls="app-vertical" size="large" onChange={setOption} value={currentOption}>
            {Options}
        </Radio.Group>
    </div>;
};

export default ParametersSelect;
