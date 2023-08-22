import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, componentFeatureKey } from './search-users.reducer';

const getState = createFeatureSelector<State>(componentFeatureKey);
export const getIsLoading = createSelector(getState, state => state.isLoading);
export const getUserList = createSelector(getState, state => state.users);
export const getTotalItems = createSelector(getState, state => state.totalItems);
