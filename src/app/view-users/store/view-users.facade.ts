import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { State } from './view-users.reducer';
import * as selectors from './view-users.selector';
import * as actions from './view-users.action';
import {ViewUsersStoreModule} from "./view-users-store.module";
@Injectable({
  providedIn: ViewUsersStoreModule
})
export class ViewUsersFacade {

  constructor(private store: Store<State>){}

  userFeed$ = this.store.pipe(select(selectors.getUserFeed));
  isLoading$ = this.store.pipe(select(selectors.getIsLoading));
  hasMoreItem$ = this.store.pipe(select(selectors.getHasMoreItem));
  currentCursor$ = this.store.pipe(select(selectors.getCurrentCursor));

  init() { this.store.dispatch(actions.init()) }
  getUserFeed(userId: number, currentCursor: string) { this.store.dispatch(actions.getUserFeed({userId, currentCursor})) }
}
