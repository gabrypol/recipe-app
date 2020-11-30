import { Action } from '@ngrx/store';

// Action types
export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';

// Actions
export class Login implements Action {
  readonly type = LOGIN;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

// Merge various action types
export type AuthActions =
  | Login
  | Logout;
