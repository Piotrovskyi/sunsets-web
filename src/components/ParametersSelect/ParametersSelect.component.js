import React, { useMemo } from 'react';
import './ParametersSelect.styles.css';
import { Radio, Select } from 'antd';
import Title from 'antd/lib/typography/Title';
import Icon from '../Icon';
import Spin from 'antd/es/spin';

const { Option } = Select;

const ParametersSelectDesktop = ({
  title,
  setOption,
  currentOption,
  optionButtons,
  loading,
  isMobile = false,
}) => {
  const onSetOption = (e) => setOption(e.target.value);

  const Options = useMemo(
    () =>
      optionButtons.map(({ value, icon, text }) => (
        <Radio.Button key={value} value={value}>
          <span className="d-flex justify-content-end align-items-center">
            {text}
            <span className="pl-3 d-inline-flex">
              <Icon iconName={icon} />
            </span>
          </span>
        </Radio.Button>
      )),
    [currentOption, optionButtons]
  );

  return (
    <div className="mt-5">
      <Title level={2} style={{ fontSize: '20px' }}>
        {title}
      </Title>
      {!!loading && <Spin />}
      <Radio.Group
        prefixCls="app-vertical"
        size="large"
        onChange={onSetOption}
        value={currentOption}
      >
        {Options}
      </Radio.Group>
    </div>
  );
};

const ParametersSelectMobile = ({
  title,
  setOption,
  currentOption,
  optionButtons,
  loading,
  isMobile = false,
}) => {
  const Options = useMemo(
    () =>
      optionButtons.map(({ value, text }) => (
        <Option value={value} key={value}>
          {text}
        </Option>
      )),
    [currentOption, optionButtons]
  );

  return (
    <Select
      style={{ width: '100%' }}
      onChange={setOption}
      value={currentOption}
      suffixIcon={<Icon iconName="selector" />}
    >
      {Options}
    </Select>
  );
};

const ParameterSelect = (props) =>
  props.isMobile ? (
    <ParametersSelectMobile {...props} />
  ) : (
    <ParametersSelectDesktop {...props} />
  );

export default ParameterSelect;
