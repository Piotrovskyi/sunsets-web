import React, { useContext, useEffect, useMemo } from 'react';
import './WeatherContent.styles.css';
import DayPicker from '../DayPicker';
import ParametersSelect from '../ParametersSelect';
import { Button, TimePicker } from 'antd';
import moment from 'moment';
import Title from 'antd/lib/typography/Title';
import { useDispatch } from 'react-redux';
import t from '../../utils/getTranstalion';
import { useSelector } from 'react-redux';
import {
  selectWeatherDay,
  selectWeatherParam,
  selectWeatherTime,
} from '../../store/weather/weather.selectors';
import {
  getSetWeatherDayAction,
  getSetWeatherParamAction,
  getSetWeatherTimeAction,
} from '../../store/weather/weather.actions';
import { getFetchWeatherParamsAction } from '../../store/weatherParams/weatherParams.actions';
import {
  selectParamsLoading,
  selectPreparedParams,
} from '../../store/weatherParams/weatherParams.selectors';
import { ScreenSizeContext } from '../../context/screenSizeContext';

const TIME_FORMAT = 'HH:mm';

const WeatherContent = () => {
  const dispatch = useDispatch();
  const day = useSelector(selectWeatherDay);
  const time = useSelector(selectWeatherTime);
  const param = useSelector(selectWeatherParam);
  const params = useSelector(selectPreparedParams);
  const paramsLoading = useSelector(selectParamsLoading);
  const setDay = (day) => dispatch(getSetWeatherDayAction(day));
  const setTime = (time) => dispatch(getSetWeatherTimeAction(time));
  const setParam = (param) => dispatch(getSetWeatherParamAction(param));
  const { isMobile } = useContext(ScreenSizeContext);

  useEffect(() => {
    dispatch(getFetchWeatherParamsAction());
  }, [dispatch]);

  const setNow = () => {
    setTime(moment().get('hours'));
    setDay(0);
  };

  const onChangeTime = (time) => {
    setTime(time.get('hours'));
  };

  const SetNowBtn = (
    <Button
      className="mx-3"
      size={isMobile ? 'large' : 'small'}
      type={isMobile ? 'link' : 'dashed'}
      onClick={setNow}
    >
      {t('general.now')}
    </Button>
  );

  const displayedTime = useMemo(
    () => moment().set('hours', time).startOf('hour'),
    [time]
  );

  // todo refactor. make responsive view simple
  return (
    <div className="px-0 pl-md-2 pr-md-4 text-right">
      {!isMobile && (
        <div className="d-flex justify-content-end mb-1">
          {SetNowBtn}
          <Title
            className="d-none d-md-inline-block"
            type="secondary"
            style={{ fontSize: '16px' }}
            level={3}
          >
            {t('general.time')}
          </Title>
        </div>
      )}
      <div className="d-flex justify-content-end align-items-center flex-wrap-reverse">
        <TimePicker
          className="mt-0 mt-md-1 ml-0 ml-md-3 mr-auto mr-md-0"
          style={{ width: '86px' }}
          allowClear={false}
          value={displayedTime}
          defaultValue={moment(Date.now())}
          onChange={onChangeTime}
          format={TIME_FORMAT}
          minuteStep={60}
        />
        {isMobile && SetNowBtn}
        <div className="ml-0 ml-md-auto flex-grow-1 flex-md-grow-0">
          <DayPicker day={day} setDay={setDay} />
        </div>
      </div>
      <div className="pl-0 pl-md-3">
        <ParametersSelect
          isMobile={isMobile}
          loading={paramsLoading}
          title={t('navigation.weather')}
          optionButtons={params}
          currentOption={param}
          setOption={setParam}
        />
      </div>
    </div>
  );
};

export default WeatherContent;
