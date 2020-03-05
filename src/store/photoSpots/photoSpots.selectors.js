import {storeKey} from "./photoSpots.constants";
import { createSelector } from "reselect"

export const getPhotoSpotsState = state => state[storeKey];

export const selectPhotoSpotsFeatures = createSelector(getPhotoSpotsState, weather => weather.features);
export const selectPhotoSpotsLoading = createSelector(getPhotoSpotsState, weather => weather.loading);
export const selectPhotoSpotsErrors = createSelector(getPhotoSpotsState, weather => weather.errors);
export const selectPhotoSpotsDay = createSelector(getPhotoSpotsState, weather => weather.day);
export const selectPhotoSpotsParam = createSelector(getPhotoSpotsState, weather => weather.param);

export const selectPhotoSpotsFetchParams = createSelector(
    getPhotoSpotsState,
    ({day, param,}) => ({day, param,})
);
