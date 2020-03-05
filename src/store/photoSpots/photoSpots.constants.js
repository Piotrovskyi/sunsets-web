import getStringWithPrefix from "../../utils/getStringWithPrefix";
import createRequestReducerTypes from "../../utils/createRequestReducerTypes";

const prefix = 'PHOTO_SPOTS';
const setPhotoSpotsPrefix = type => getStringWithPrefix(prefix, type);

const fetchPhotoSpotsFeaturesPrefix = setPhotoSpotsPrefix('FETCH_FEATURES');

export const SET_DAY = setPhotoSpotsPrefix('SET_DAY');
export const SET_PARAM = setPhotoSpotsPrefix('SET_PARAM');
export const SET_LOADING = setPhotoSpotsPrefix('SET_LOADING');
export const SET_ERRORS = setPhotoSpotsPrefix('SET_ERRORS');
export const SET_FEATURES = setPhotoSpotsPrefix('SET_FEATURES');

export const fetchPhotoSpotsFeaturesTypes = createRequestReducerTypes(fetchPhotoSpotsFeaturesPrefix);
export const storeKey = 'photoSpots';
