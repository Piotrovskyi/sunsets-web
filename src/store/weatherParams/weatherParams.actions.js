import createAction from "../../utils/createAction";
import {SET_ERRORS, SET_LOADING, SET_PARAMS} from "./weatherParams.constants";

export const getSetWeatherParamsLoadingAction = payload => createAction(SET_LOADING, payload);
export const getSetWeatherParamsErrorsAction = payload => createAction(SET_ERRORS, payload);
export const getSetWeatherParamsAction = payload => createAction(SET_PARAMS, payload);
