import {combineReducers} from "redux";
import weather from "./weather/weather.reduces";
import weatherParams from "./weatherParams/weatherParams.reducers";

const rootReducer = (state, action) => combineReducers(
    {weather, weatherParams}
)(state, action);

export default rootReducer;
