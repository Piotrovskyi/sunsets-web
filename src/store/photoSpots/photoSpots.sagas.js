import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import { REQUEST } from '../../constants/saga.constants';
import {
  fetchPhotoSpotsFeaturesTypes,
  SET_DAY,
  SET_PARAM,
} from './photoSpots.constants';
import { PHOTO_SPOTS_DATA_URL } from '../../constants/map.constants';
import {
  getFetchPhotoSpotsFeaturesAction,
  getSetPhotoSpotsErrorsAction,
  getSetPhotoSpotsLoadingAction,
} from './photoSpots.actions';
import { selectPhotoSpotsFetchParams } from './photoSpots.selectors';
import { PHOTO_PARAMS_DATA_URL} from '../../constants/map.constants'
import photoSpotsSlice from './photoSpots.slice';

const getWeatherDataUrl = (day, param) =>
  `${PHOTO_SPOTS_DATA_URL}${day}/${param}.json`;

function* fetchWeatherFeatures(action) {
  const { day, param } = yield select(selectPhotoSpotsFetchParams);

  try {
    const data = yield call(fetch, getWeatherDataUrl(day, param));
    const features = yield call([data, data.json]);
    yield put(photoSpotsSlice.actions.setFeatures(features));
  } catch (e) {
    yield put(photoSpotsSlice.actions.setErrors(e));
  }
}

function* getPhotoSporsParams() {
  try {
    const data = yield call(fetch, PHOTO_PARAMS_DATA_URL);
    const { params } = yield call([data, data.json]);
    console.log(params)
    yield put(photoSpotsSlice.actions.setParamsList(params));
  } catch (err) {}
}

export default function* photoSpotsSaga() {
  yield getPhotoSporsParams();
  yield all([
    takeEvery([photoSpotsSlice.actions.setDay, photoSpotsSlice.actions.setParam], fetchWeatherFeatures),
  ]);
}
