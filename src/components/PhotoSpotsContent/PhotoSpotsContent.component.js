import React, { useCallback, useContext, useEffect } from 'react';
import './PhotoSpotsContent.styles.css';
import ParametersSelect from '../ParametersSelect';
import {
  CLOUDS_OPT,
  SUNRISE_OPT,
  SUNSET_OPT,
  THUNDER_OPT,
} from '../../constants/option.constants';
import DayPicker from '../DayPicker';
import Title from 'antd/lib/typography/Title';
import t from '../../utils/getTranstalion';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPhotoSpotsDay,
  selectPhotoSpotsParam,
  selectPreparedParams,
} from '../../store/photoSpots/photoSpots.selectors';
import {
  getSetPhotoSpotsDayAction,
  getSetPhotoSpotsParamAction,
} from '../../store/photoSpots/photoSpots.actions';
import { ScreenSizeContext } from '../../context/screenSizeContext';
import photoSpotsSlice from '../../store/photoSpots/photoSpots.slice';

const spotTabParamOptions = [
  {
    value: CLOUDS_OPT,
    icon: 'cloud',
    text: t('options.clouds'),
  },
  {
    value: SUNRISE_OPT,
    icon: 'sunrise',
    text: t('options.sunrise'),
  },
  {
    value: SUNSET_OPT,
    icon: 'sunset',
    text: t('options.sunset'),
  },
  {
    value: THUNDER_OPT,
    icon: 'cloud-lightning',
    text: t('options.thunder'),
  },
];

const PhotoSpotsContent = () => {
  const dispatch = useDispatch();
  const day = useSelector(selectPhotoSpotsDay);
  const param = useSelector(selectPhotoSpotsParam);
  const params = useSelector(selectPreparedParams);
  const setDay = (day) => dispatch(photoSpotsSlice.actions.setDay(day));
  const setParam = (param) => dispatch(photoSpotsSlice.actions.setParam(param));
  const { isMobile } = useContext(ScreenSizeContext);

  return (
    <div className="px-0 pl-md-2 pr-md-4 text-right">
      <Title
        type="secondary"
        className="d-none d-md-inline-block"
        style={{ fontSize: '16px' }}
        level={3}
      >
        {/* {t('general.time')} */}
      </Title>
      <DayPicker day={day} setDay={setDay} />
      <div className="pl-0 pl-md-3">
        <ParametersSelect
          isMobile={isMobile}
          title={t('navigation.photo_spots')}
          optionButtons={spotTabParamOptions}
          currentOption={param}
          setOption={setParam}
          optionButtons={params}
        />
      </div>
    </div>
  );
};

export default PhotoSpotsContent;
