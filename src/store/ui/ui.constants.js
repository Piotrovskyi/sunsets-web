import getStringWithPrefix from "../../utils/getStringWithPrefix";

const prefix = 'UI';

const setUiPrefix = type => getStringWithPrefix(prefix, type);

export const SET_ACTIVE_MAP_TAB =  setUiPrefix('SET_ACTIVE_MAP_TAB');

export const storeKey = 'ui';
