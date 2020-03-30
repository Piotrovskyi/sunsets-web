import getStringWithPrefix from '../../utils/getStringWithPrefix';
import createRequestReducerTypes from '../../utils/createRequestReducerTypes';

const prefix = 'WEATHER';
const setWeatherPrefix = (type) => getStringWithPrefix(prefix, type);

const fetchWeatherFeaturesPrefix = setWeatherPrefix('FETCH_FEATURES');

export const SET_DAY = setWeatherPrefix('SET_DAY');
export const SET_PARAM = setWeatherPrefix('SET_PARAM');
export const SET_TIME = setWeatherPrefix('SET_TIME');
export const SET_LOADING = setWeatherPrefix('SET_LOADING');
export const SET_ERRORS = setWeatherPrefix('SET_ERRORS');
export const SET_FEATURES = setWeatherPrefix('SET_FEATURES');

export const fetchWeatherFeaturesTypes = createRequestReducerTypes(
  fetchWeatherFeaturesPrefix
);
export const storeKey = 'weather';
