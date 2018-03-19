import * as constants from './constants';

export function signIn(login, pass) {
  return {
    type: constants.SIGN_IN,
    login,
    pass
  }
}

export function signedIn(token) {
  return {
    type: constants.SIGNED_IN,
    token
  }
} 

export function signOut() {
  return {
    type: constants.SIGN_OUT
  }
} 
