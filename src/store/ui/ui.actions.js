import createAction from '../../utils/createAction';
import { SET_ACTIVE_MAP_TAB } from './ui.constants';

export const getSetActiveMapTabAction = (payload) =>
  createAction(SET_ACTIVE_MAP_TAB, payload);
