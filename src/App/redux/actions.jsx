import {
  SIGNUP_LOGIN,
  LOGOUT,
} from './types';

export const signupLogin = (email) => ({
  type: SIGNUP_LOGIN,
  payload: email,
});

export const logout = () => ({
  type: LOGOUT,
});
