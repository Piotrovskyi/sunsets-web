import {createSelector} from "reselect";
import {selectPhotoSpotsFeatures} from "./photoSpots/photoSpots.selectors";
import {selectWeatherFeatures} from "./weather/weather.selectors";
import {selectActiveMapTab} from "./ui/ui.selectors";
import {MAP_PHOTO_SPOTS_TAB_KEY} from "../constants/map.constants";

export const selectFeaturesByTab = createSelector(
    selectActiveMapTab,
    selectPhotoSpotsFeatures,
    selectWeatherFeatures,
    (tab, spotsFeatures, weatherFeatures) => tab === MAP_PHOTO_SPOTS_TAB_KEY ? spotsFeatures : weatherFeatures
);
