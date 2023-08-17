import { createAction, props } from '@ngrx/store';
import {IUser} from "../../Dta";
export const key = '[Component Search Users Store] ';

export const error = createAction(key + 'Error', props<{ error: any }>());
export const init = createAction(key + 'init');
export const getUsers = createAction(key + 'get users', props<{ term: string }>());
export const getUsersSuccess = createAction(key + 'get users success', props<{ users: IUser[] }>());
