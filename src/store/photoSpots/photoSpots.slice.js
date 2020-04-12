import { createSlice } from '@reduxjs/toolkit';
import { dayValuesMap } from '../../constants/days.constants';
import { SET_FEATURES } from '../weather/weather.constants';

const initialState = {
  day: dayValuesMap.TODAY,
  param: null,
  features: null,
  loading: true,
  errors: null,
  params: []
};

const photoSpotsSlice = createSlice({
  name: 'photoSpots',
  initialState,
  reducers: {
    setDay(state, action) {
      state.day = action.payload
    },
    setParam(state, action) {
      state.param = action.payload
    },
    setLoading(state, action) {
      state.loading = action.payload
    },
    setFeatures(state, action) {
      state.features = action.payload
      state.loading = false
      state.errors = null
    },
    setErrors(state, action) {
      state.errors = action.payload
      state.loading = false
      state.features = null
    },
    setParamsList(state, action) {
      state.params = action.payload
      state.loading = false
      state.errors = null
    }
  }
})

export default photoSpotsSlice;

export const reducer =photoSpotsSlice.reducer;
