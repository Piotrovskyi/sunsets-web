import createAction from "../../utils/createAction";
import {fetchWeatherParamsTypes, SET_ERRORS, SET_LOADING, SET_PARAMS} from "./weatherParams.constants";
import {REQUEST} from "../../constants/saga.constants";

export const getSetWeatherParamsLoadingAction = payload => createAction(SET_LOADING, payload);
export const getSetWeatherParamsErrorsAction = payload => createAction(SET_ERRORS, payload);
export const getSetWeatherParamsAction = payload => createAction(SET_PARAMS, payload);
export const getFetchWeatherParamsAction = payload => createAction(fetchWeatherParamsTypes[REQUEST], payload);
