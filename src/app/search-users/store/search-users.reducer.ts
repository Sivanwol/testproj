import {Action, createReducer, on} from "@ngrx/store";
import {IUser} from "../../Dta";

import * as ComponentSearchUsersActions from './search-users.action';

export const componentFeatureKey = 'component-search-users';
export interface State {
  isLoading: boolean;
  users: IUser[];
  totalItems: number;
}

export const initialState: State = {
  isLoading: false,
  users: [],
  totalItems: 0
};
export const componentMainMenuReducer = createReducer(
  initialState,

  on(ComponentSearchUsersActions.init, state => ({...initialState, isLoading: false})),
  on(ComponentSearchUsersActions.getUsers, state => ({...initialState, isLoading: true})),
  on(ComponentSearchUsersActions.getUsersSuccess, (state, {users}) => ({...initialState, users, isLoading: false , totalItems: users.length})),
);

export function reducer(state: State | undefined, action: Action): State {
  return componentMainMenuReducer(state, action);
}
