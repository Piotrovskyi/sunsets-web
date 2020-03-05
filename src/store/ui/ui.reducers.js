import {MAP_PHOTO_SPOTS_TAB_KEY} from "../../constants/map.constants";
import createReducer from "../../utils/createReducer";
import {SET_ACTIVE_MAP_TAB} from "./ui.constants";

const initialState = {
    activeMapTab: MAP_PHOTO_SPOTS_TAB_KEY,
};

const ui = createReducer({
    [SET_ACTIVE_MAP_TAB]: (state, action) => ({...state, activeMapTab: action.payload})
}, initialState);

export default ui;
