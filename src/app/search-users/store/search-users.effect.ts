import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { Store} from "@ngrx/store";
import {LocalStorageManagerService} from "../../Services/LocalStorageManagerService";
import {State} from "./search-users.reducer";
import * as SearchUsersActions from "./search-users.action";
import {mergeMap} from "rxjs";
import {APIService} from "../../Services/API.service";

@Injectable()
export class SearchUsersEffect {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private lsManager: LocalStorageManagerService,
    private apiService: APIService,
  ) {
  }

  getUsers$ = createEffect(() => this.actions$.pipe(
    ofType(SearchUsersActions.getUsers),
    mergeMap(({term}) => {
      return this.apiService.getUsers(term).pipe(
        mergeMap((users) => {
          return [
            SearchUsersActions.getUsersSuccess({users})
          ];
        })
      )
    })
  ));
}
