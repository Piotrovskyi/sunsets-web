import { storeKey } from './photoSpots.constants';
import { createSelector } from 'reselect';

export const getPhotoSpotsState = (state) => state[storeKey];

export const selectPhotoSpotsFeatures = createSelector(
  getPhotoSpotsState,
  (weather) => weather.features
);
export const selectPhotoSpotsLoading = createSelector(
  getPhotoSpotsState,
  (weather) => weather.loading
);
export const selectPhotoSpotsErrors = createSelector(
  getPhotoSpotsState,
  (weather) => weather.errors
);
export const selectPhotoSpotsDay = createSelector(
  getPhotoSpotsState,
  (weather) => weather.day
);
export const selectPhotoSpotsParam = createSelector(
  getPhotoSpotsState,
  (weather) => weather.param
);

export const selectPhotoSpotsParams = createSelector(
  getPhotoSpotsState,
  (weather) => weather.params
);

export const selectPreparedParams = createSelector(
  selectPhotoSpotsParams,
  (list) =>
    list.map(({ id, name }) => ({
      value: id,
      icon: null,
      text: name,
    }))
);

export const selectPhotoParamById = createSelector(
  selectPhotoSpotsParams,
  (_, id) => id,
  (params, id) => params.find((el) => el.id === id)
);

export const selectPhotoSpotsFetchParams = createSelector(
  getPhotoSpotsState,
  ({ day, param }) => ({ day, param })
);
