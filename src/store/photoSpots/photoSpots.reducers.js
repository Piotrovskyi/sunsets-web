import { dayValuesMap } from '../../constants/days.constants';
import createReducer from '../../utils/createReducer';
import {
  SET_DAY,
  SET_ERRORS,
  SET_FEATURES,
  SET_LOADING,
  SET_PARAM,
} from './photoSpots.constants';

const initialState = {
  day: dayValuesMap.TODAY,
  param: null,
  features: null,
  loading: false,
  errors: null,
};

const photoSpots = createReducer(
  {
    [SET_DAY]: (state, action) => ({ ...state, day: action.payload }),
    [SET_PARAM]: (state, action) => ({ ...state, param: action.payload }),
    [SET_LOADING]: (state, action) => ({ ...state, loading: action.payload }),
    [SET_ERRORS]: (state, action) => ({
      ...state,
      errors: action.payload,
      loading: false,
      features: null,
    }),
    [SET_FEATURES]: (state, action) => ({
      ...state,
      features: action.payload,
      loading: false,
      errors: null,
    }),
  },
  initialState
);

export default photoSpots;
