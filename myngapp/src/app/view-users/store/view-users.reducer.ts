import {Action, createReducer, on} from "@ngrx/store";

import * as ComponentViewUsersActions from './view-users.action';
import {UserFeed} from "../../Dta";

export const componentFeatureKey = 'component-view-users';

export interface State {
  isLoading: boolean;
  feed: UserFeed | null;
  currentCursor: string;
  hasMoreItems: boolean;

}

export const initialState: State = {
  isLoading: false,
  feed: null,
  currentCursor: '',
  hasMoreItems: false,
};
export const componentUserFeedReducer = createReducer(
  initialState,

  on(ComponentViewUsersActions.init, state => ({...initialState, isLoading: false})),
  on(ComponentViewUsersActions.getUserFeed, state => ({...initialState, isLoading: true})),
  on(ComponentViewUsersActions.getUserFeedSuccess, (state, {feed}) => ({
    ...initialState,
    feed,
    isLoading: false,
    currentCursor: feed.end_cursor,
    hasMoreItems: feed.more_available
  })),
);

export function reducer(state: State | undefined, action: Action): State {
  return componentUserFeedReducer(state, action);
}
