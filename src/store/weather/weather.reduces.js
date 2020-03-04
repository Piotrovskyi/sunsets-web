import createReducer from "../../utils/createReducer";
import {dayValuesMap} from "../../constants/days.constants";
import moment from "moment";
import {CLOUDS_OPT} from "../../constants/option.constants";
import {SET_DAY, SET_ERRORS, SET_FEATURES, SET_LOADING, SET_PARAM, SET_TIME} from "./weather.constants";

const initialState = {
    day: dayValuesMap.TODAY,
    time: moment().get('hours'),
    param: CLOUDS_OPT,
    features: null,
    loading: false,
    errors: null,
};

const weather = createReducer(
    {
        [SET_DAY]: (state, action) => ({...state, day : action.payload}),
        [SET_PARAM]: (state, action) => ({...state, param : action.payload}),
        [SET_TIME]: (state, action) => ({...state, time : action.payload}),
        [SET_LOADING]: (state, action) => ({...state, loading : action.payload}),
        [SET_ERRORS]: (state, action) => ({...state, errors : action.payload, loading: false, features: null}),
        [SET_FEATURES]: (state, action) => ({...state, features : action.payload , loading: false, errors: null}),
    },
    initialState
);

export default weather;
