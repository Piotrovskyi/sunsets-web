import { REQUEST } from '../../constants/saga.constants';
import createAction from '../../utils/createAction';
import {
  fetchPhotoSpotsFeaturesTypes,
  SET_DAY,
  SET_ERRORS,
  SET_FEATURES,
  SET_LOADING,
  SET_PARAM,
} from './photoSpots.constants';

export const getSetPhotoSpotsLoadingAction = (payload) =>
  createAction(SET_LOADING, payload);
export const getSetPhotoSpotsDayAction = (payload) =>
  createAction(SET_DAY, payload);
export const getSetPhotoSpotsParamAction = (payload) =>
  createAction(SET_PARAM, payload);
export const getSetPhotoSpotsErrorsAction = (payload) =>
  createAction(SET_ERRORS, payload);
export const getSetPhotoSpotsFeaturesAction = (payload) =>
  createAction(SET_FEATURES, payload);
export const getFetchPhotoSpotsFeaturesAction = (payload) =>
  createAction(fetchPhotoSpotsFeaturesTypes[REQUEST], payload);
