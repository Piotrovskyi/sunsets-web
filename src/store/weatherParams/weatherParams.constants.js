import getStringWithPrefix from '../../utils/getStringWithPrefix';
import createRequestReducerTypes from '../../utils/createRequestReducerTypes';

const prefix = 'WEATHER_PARAMS';
const setWeatherPrefix = (type) => getStringWithPrefix(prefix, type);

const fetchWeatherParamsPrefix = setWeatherPrefix('FETCH');

export const SET_LOADING = setWeatherPrefix('SET_LOADING');
export const SET_ERRORS = setWeatherPrefix('SET_ERRORS');
export const SET_PARAMS = setWeatherPrefix('SET_PARAMS');

export const fetchWeatherParamsTypes = createRequestReducerTypes(
  fetchWeatherParamsPrefix
);
export const storeKey = 'weatherParams';
