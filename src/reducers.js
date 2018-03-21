import { SIGN_IN, SIGN_OUT, API_TOKEN } from './constants'

const api_token = localStorage.getItem(API_TOKEN);

export const userReducer = (state = {token: api_token}, action) => {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem(API_TOKEN, action.token);
      return Object.assign({}, state, {
		  token: action.token
        })
    case SIGN_OUT:
      localStorage.removeItem(API_TOKEN);
      return Object.assign({}, state, {
		  token: null
        })
    default:
      return state
  }
}
