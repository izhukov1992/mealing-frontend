import { SIGN_IN, SIGNED_IN } from './constants'

export function signIn(state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      return {};
    default:
      return state
  }
}

export function signedIn(state = {}, action) {
  switch (action.type) {
    case SIGNED_IN:
      return {};
    default:
      return state
  }
}
