import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, componentFeatureKey } from './view-users.reducer';

const getState = createFeatureSelector<State>(componentFeatureKey);
export const getIsLoading = createSelector(getState, state => state.isLoading);
export const getUserFeed = createSelector(getState, state => state.feed);
export const getHasMoreItem = createSelector(getState, state => state.hasMoreItems);
export const getCurrentCursor = createSelector(getState, state => state.currentCursor);
