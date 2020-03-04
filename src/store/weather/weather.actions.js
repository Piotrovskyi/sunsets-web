import createAction from "../../utils/createAction";
import {SET_DAY, SET_ERRORS, SET_FEATURES, SET_LOADING, SET_PARAM, SET_TIME} from "./weather.constants";

export const getSetWeatherLoadingAction = payload => createAction(SET_LOADING, payload);
export const getSetWeatherDayAction = payload => createAction(SET_DAY, payload);
export const getSetWeatherParamAction = payload => createAction(SET_PARAM, payload);
export const getSetWeatherTimeAction = payload => createAction(SET_TIME, payload);
export const getSetWeatherErrorsAction = payload => createAction(SET_ERRORS, payload);
export const getSetWeatherFeaturesAction = payload => createAction(SET_FEATURES, payload);
