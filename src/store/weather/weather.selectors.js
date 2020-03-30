import { storeKey } from './weather.constants';
import { createSelector } from 'reselect';

export const getWeatherState = (state) => state[storeKey];

export const selectWeatherFeatures = createSelector(
  getWeatherState,
  (weather) => weather.features
);
export const selectWeatherLoading = createSelector(
  getWeatherState,
  (weather) => weather.loading
);
export const selectWeatherErrors = createSelector(
  getWeatherState,
  (weather) => weather.errors
);
export const selectWeatherDay = createSelector(
  getWeatherState,
  (weather) => weather.day
);
export const selectWeatherTime = createSelector(
  getWeatherState,
  (weather) => weather.time
);
export const selectWeatherParam = createSelector(
  getWeatherState,
  (weather) => weather.param
);
export const selectWeatherFetchParams = createSelector(
  getWeatherState,
  ({ day, time, param }) => ({ day, time, param })
);
