import { all, takeEvery, put, call } from 'redux-saga/effects';
import { REQUEST } from '../../constants/saga.constants';
import { fetchWeatherParamsTypes } from './weatherParams.constants';
import {
  getSetWeatherParamsAction,
  getSetWeatherParamsErrorsAction,
  getSetWeatherParamsLoadingAction,
} from './weatherParams.actions';
import { WEATHER_PARAMS_DATA_URL } from '../../constants/map.constants';
import { getSetWeatherParamAction } from '../weather/weather.actions';

function* fetchWeatherParams(action) {
  yield put(getSetWeatherParamsLoadingAction(true));
  try {
    const data = yield call(fetch, WEATHER_PARAMS_DATA_URL);
    const { params } = yield call([data, data.json]);
    yield put(getSetWeatherParamsAction(params));
    yield put(getSetWeatherParamAction(params[0].id));
  } catch (e) {
    yield put(getSetWeatherParamsErrorsAction(e));
  }
}

export default function* weatherParamsSaga() {
  yield all([takeEvery(fetchWeatherParamsTypes[REQUEST], fetchWeatherParams)]);
}
