import { storeKey } from './ui.constants';
import { createSelector } from 'reselect';

const getUiState = (state) => state[storeKey];

export const selectActiveMapTab = createSelector(
  getUiState,
  (tabState) => tabState.activeMapTab
);
