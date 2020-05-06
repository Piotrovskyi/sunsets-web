import React, { useContext } from 'react';
import './PhotoSpotsContent.styles.css';
import ParametersSelect from '../ParametersSelect';
import DayPicker from '../DayPicker';
import Title from 'antd/lib/typography/Title';
import t from '../../utils/getTranstalion';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPhotoSpotsDay,
  selectPhotoSpotsParam,
  selectPreparedParams,
  selectPhotoParamById,
} from '../../store/photoSpots/photoSpots.selectors';
import { ScreenSizeContext } from '../../context/screenSizeContext';
import photoSpotsSlice from '../../store/photoSpots/photoSpots.slice';

const PhotoSpotsContent = () => {
  const dispatch = useDispatch();
  const day = useSelector(selectPhotoSpotsDay);
  const param = useSelector(selectPhotoSpotsParam);
  const params = useSelector(selectPreparedParams);
  const paramMeta = useSelector((state) => selectPhotoParamById(state, param));
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
        {paramMeta?.description && (
          <div
            style={{
              width: '100%',
              marginTop: '20px',
              border: '1px solid #9bcdd9',
              padding: '0.65em',
              borderRadius: '0.25em',
              backgroundColor: "#e2efec",
            }}
          >
            {paramMeta.description}
          </div>
        )}

        <ParametersSelect
          isMobile={isMobile}
          title={t('navigation.photo_spots')}
          optionButtons={params}
          currentOption={param}
          setOption={setParam}
        />
      </div>
    </div>
  );
};

export default PhotoSpotsContent;
