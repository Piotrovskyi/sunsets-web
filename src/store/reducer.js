import { combineReducers } from 'redux';
import weather from './weather/weather.reduces';
import weatherParams from './weatherParams/weatherParams.reducers';
import ui from './ui/ui.reducers';
import { reducer as photoSpots } from './photoSpots/photoSpots.slice';
import { storeKey as weatherStoreKey } from './weather/weather.constants';
import { storeKey as weatherParamsStoreKey } from './weatherParams/weatherParams.constants';
import { storeKey as uiStoreKey } from './ui/ui.constants';
import { storeKey as photoSpotsStoreKey } from './photoSpots/photoSpots.constants';

const rootReducer = (state, action) =>
  combineReducers({
    [weatherStoreKey]: weather,
    [weatherParamsStoreKey]: weatherParams,
    [uiStoreKey]: ui,
    [photoSpotsStoreKey]: photoSpots,
  })(state, action);

export default rootReducer;
