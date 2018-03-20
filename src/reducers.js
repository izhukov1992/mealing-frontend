import { SIGN_IN, SIGNED_IN } from './constants'

export const sign = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      return Object.assign({}, state, {
		  login: action.login,
		  pass: action.pass
        })
    default:
      return state
  }
}

export const signedIn = (state = {}, action) => {
    console.log(action)
  switch (action.type) {
    case SIGNED_IN:
      return Object.assign({}, state, {
		  token: action.token
        })
    default:
      return state
  }
}
