import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import { REQUEST } from '../../constants/saga.constants';
import {
  fetchWeatherFeaturesTypes,
  SET_DAY,
  SET_PARAM,
  SET_TIME,
} from './weather.constants';
import {
  getSetWeatherErrorsAction,
  getSetWeatherFeaturesAction,
  getSetWeatherLoadingAction,
} from './weather.actions';
import { WEATHER_DATA_URL } from '../../constants/map.constants';
import { selectWeatherFetchParams } from './weather.selectors';

const getWeatherDataUrl = (day, time, param) =>
  `${WEATHER_DATA_URL}${day}/${time}/${param}.json`;

function* fetchWeatherFeatures(action) {
  yield put(getSetWeatherLoadingAction(true));
  const { day, time, param } = yield select(selectWeatherFetchParams);

  try {
    const data = yield call(fetch, getWeatherDataUrl(day, time, param));
    const features = yield call([data, data.json]);
    yield put(getSetWeatherFeaturesAction(features));
  } catch (e) {
    yield put(getSetWeatherErrorsAction(e));
  }
}

export default function* weatherSaga() {
  yield all([
    takeEvery(fetchWeatherFeaturesTypes[REQUEST], fetchWeatherFeatures),
    takeEvery([SET_DAY, SET_PARAM, SET_TIME], fetchWeatherFeatures),
  ]);
}
