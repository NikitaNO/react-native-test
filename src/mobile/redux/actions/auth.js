import {LOG_IN, SIGN_UP} from '../constants/auth'
import {logIn, signUp} from '../api/auth'

export function logInAction(form) {
  return {
    type: LOG_IN,
    payload: logIn(form)
  }
};

export function registerAction(form) {
  return {
    type: SIGN_UP,
    payload: signUp(form)
  }
};