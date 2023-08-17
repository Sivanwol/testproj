import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { Store} from "@ngrx/store";
import {LocalStorageManagerService} from "../../Services/LocalStorageManagerService";
import { State} from "./view-users.reducer";
import * as actions from "./view-users.action";
import {mergeMap, withLatestFrom} from "rxjs";
import {APIService} from "../../Services/API.service";

@Injectable()
export class ViewUsersEffect {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private lsManager: LocalStorageManagerService,
    private apiService: APIService,
  ) {
  }

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.getUserFeed),
      mergeMap(({userId, currentCursor}) => {
        return this.apiService.getUserFeed(userId, currentCursor).pipe(
          mergeMap((feed) => {
            console.log(feed);
            return [
              actions.getUserFeedSuccess({feed: feed!})
            ];
          })
        )
      })
    );
  });
}
