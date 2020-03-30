import createReducer from '../../utils/createReducer';
import { SET_ERRORS, SET_LOADING, SET_PARAMS } from './weatherParams.constants';

const initialState = {
  params: [],
  loading: false,
  errors: null,
};

const weatherParams = createReducer(
  {
    [SET_LOADING]: (state, action) => ({ ...state, loading: action.payload }),
    [SET_ERRORS]: (state, action) => ({
      ...state,
      errors: action.payload,
      loading: false,
      params: {},
    }),
    [SET_PARAMS]: (state, action) => ({
      ...state,
      params: action.payload,
      errors: null,
      loading: false,
    }),
  },
  initialState
);

export default weatherParams;
