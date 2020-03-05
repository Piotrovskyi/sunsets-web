import {createSelector} from "reselect";
import {storeKey} from "./weatherParams.constants";

const getWeatherParamsState = state => state[storeKey];

export const selectParamsList = createSelector(getWeatherParamsState, weatherParams => weatherParams.params);
export const selectParamsLoading = createSelector(getWeatherParamsState, weatherParams => weatherParams.loading);
export const selectParamsErrors = createSelector(getWeatherParamsState, weatherParams => weatherParams.errors);
export const selectPreparedParams = createSelector(selectParamsList,
    list => list.map(({id, name}) => ({
            value: id,
            icon: null,
            text: name,
        })
    )
);
