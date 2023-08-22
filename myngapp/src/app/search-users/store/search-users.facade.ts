import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { State } from './search-users.reducer';
import * as SearchUsersSelectors from './search-users.selector';
import * as SearchUsersActions from './search-users.action';
import {SearchUsersStoreModule} from './search-users-store.module';
@Injectable({
  providedIn: SearchUsersStoreModule
})
export class SearchUsersFacade {

  constructor(private store: Store<State>){}

  userList$ = this.store.pipe(select(SearchUsersSelectors.getUserList));
  isLoading$ = this.store.pipe(select(SearchUsersSelectors.getIsLoading));
  totalItems$ = this.store.pipe(select(SearchUsersSelectors.getTotalItems));

  init() { this.store.dispatch(SearchUsersActions.init()) }
  getUsers(term: string) { this.store.dispatch(SearchUsersActions.getUsers({term})) }
}
