import {all, takeEvery, put, call, select} from 'redux-saga/effects';
import {REQUEST} from "../../constants/saga.constants";
import {fetchPhotoSpotsFeaturesTypes, SET_DAY, SET_PARAM} from "./photoSpots.constants";
import {PHOTO_SPOTS_DATA_URL} from "../../constants/map.constants";
import {
    getFetchPhotoSpotsFeaturesAction,
    getSetPhotoSpotsErrorsAction,
    getSetPhotoSpotsLoadingAction
} from "./photoSpots.actions";
import {selectPhotoSpotsFetchParams} from "./photoSpots.selectors";

const getWeatherDataUrl = (day, time, param,) => `${PHOTO_SPOTS_DATA_URL}${day}/${param}.json`;

function* fetchWeatherFeatures(action) {
    return;
    // todo add PHOTO_SPOTS_DATA_URL and then remove return
    yield put(getSetPhotoSpotsLoadingAction(true));
    const {
        day,
        param,
    } = yield select(selectPhotoSpotsFetchParams);
    try {
        const data = yield call(fetch, getWeatherDataUrl(day, param));
        const features = yield call([data, data.json]);
        yield put(getFetchPhotoSpotsFeaturesAction(features));
    } catch (e) {
        yield put(getSetPhotoSpotsErrorsAction(e));
    }
}

export default function* weatherSaga() {
    yield all([
        takeEvery(fetchPhotoSpotsFeaturesTypes[REQUEST], fetchWeatherFeatures),
        takeEvery([SET_DAY, SET_PARAM,], fetchWeatherFeatures)
    ])
}
