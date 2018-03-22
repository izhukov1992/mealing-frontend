import { replace } from 'react-router-redux';

import { SIGN_IN_FAILED, SIGN_IN_SUCCESS, SIGN_OUT, SIGN_UP_FAILED, SIGN_UP_SUCCESS } from './constants';

export const signInFailed = (error) => ({
  type: SIGN_IN_FAILED,
  error
})

export const signInSuccess = (token) => ({
  type: SIGN_IN_SUCCESS,
  token
})

export const signOut = () => ({
  type: SIGN_OUT
})

export const signUpFailed = (error) => ({
  type: SIGN_UP_FAILED,
  error
})

export const signUpSuccess = (token) => ({
  type: SIGN_UP_SUCCESS,
  token
})

export const authenticate = (login, pass) => {
  return dispatch => {
    return fetch('/api/v1/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: login,
        password: pass
      })
    })
    .then(response => {
      if (response.ok) {
        response.json().then(json => {
          dispatch(signInSuccess(json.token));
          dispatch(replace('/'));
        })
      }
      else {
        response.json().then(json => {
          dispatch(signInFailed(json));
        })
      }
    })
  }
}

export const register = (login, email, pass, fname, lname, role) => {
  return dispatch => {
    return fetch('/api/v1/user/create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: login,
        email: email,
        password: pass,
        first_name: fname,
        last_name: lname,
        account: {
          role: role
        }
      })
    })
    .then(response => {
      if (response.ok) {
        response.json().then(json => {
          dispatch(signUpSuccess(json.token));
          dispatch(replace('/'));
        })
      }
      else {
        response.json().then(json => {
          dispatch(signUpFailed(json));
        })
      }
    })
  }
}