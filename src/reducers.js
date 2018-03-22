import { SIGN_IN_FAILED, SIGN_IN_SUCCESS, SIGN_OUT, API_TOKEN, SIGN_UP_FAILED, SIGN_UP_SUCCESS } from './constants'

const initialState = {
  token: localStorage.getItem(API_TOKEN),
  signin_errors: null,
  signup_errors: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      localStorage.setItem(API_TOKEN, action.token);
      return Object.assign({}, state, {
        token: action.token,
        signin_errors: null,
        signup_errors: null
      })
    case SIGN_IN_FAILED:
      return Object.assign({}, state, {
        signin_errors: action.error
      })
    case SIGN_OUT:
      localStorage.removeItem(API_TOKEN);
      return Object.assign({}, state, {
        token: null
      })
    case SIGN_UP_SUCCESS:
      localStorage.setItem(API_TOKEN, action.token);
      return Object.assign({}, state, {
        token: action.token,
        signin_errors: null,
        signup_errors: null
      })
    case SIGN_UP_FAILED:
      return Object.assign({}, state, {
        signup_errors: action.error
      })
    default:
      return state
  }
}