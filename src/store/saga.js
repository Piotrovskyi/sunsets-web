import {fork, all} from "@redux-saga/core/effects";
import weatherSaga from "./weather/weather.sagas";
import weatherParamsSaga from "./weatherParams/weatherParams.sagas";

function* rootSaga() {
    return yield all([
        fork(weatherSaga),
        fork(weatherParamsSaga)
    ]);
}

export default rootSaga
