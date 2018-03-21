import { SIGN_IN_FAILED, SIGN_IN_SUCCESS, SIGN_OUT, API_TOKEN } from './constants'

const initialState = {
  token: localStorage.getItem(API_TOKEN),
  error:  null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      localStorage.setItem(API_TOKEN, action.token);
      return Object.assign({}, state, {
        token: action.token,
        error: null
      })
    case SIGN_IN_FAILED:
      return Object.assign({}, state, {
        error: action.error
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