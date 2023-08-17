import { createAction, props } from '@ngrx/store';
import {UserFeed} from "../../Dta";
export const key = '[Component User Feed Store] ';

export const error = createAction(key + 'Error', props<{ error: any }>());
export const init = createAction(key + 'init');
export const getUserFeed = createAction(key + 'get user feed', props<{ userId: number, currentCursor: string }>());
export const getUserFeedSuccess = createAction(key + 'get user feed success', props<{ feed: UserFeed }>());
