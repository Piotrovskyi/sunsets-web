import { fork, all } from '@redux-saga/core/effects';
import weatherSaga from './weather/weather.sagas';
import weatherParamsSaga from './weatherParams/weatherParams.sagas';
import photoSpotsSaga from './photoSpots/photoSpots.sagas';

function* rootSaga() {
  return yield all([
    fork(weatherSaga),
    fork(weatherParamsSaga),
    fork(photoSpotsSaga),
  ]);
}

export default rootSaga;
