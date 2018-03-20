import { SIGN_IN, SIGNED_IN } from './constants'

export const userReducer = (state = {token: 'initial'}, action) => {
    console.log(action)
  switch (action.type) {
    case SIGN_IN:
      return Object.assign({}, state, {
		  login: action.login,
		  pass: action.pass
        })
    case SIGNED_IN:
      return Object.assign({}, state, {
		  token: action.token
        })
    default:
      return state
  }
}
