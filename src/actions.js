import { replace } from 'react-router-redux';

import { SIGN_IN_FAILED, SIGN_IN_SUCCESS, SIGN_OUT } from './constants';

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

export const authenticate = (login, pass) => {
  return dispatch => {
    return fetch('/api/v1/auth/', {
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
				dispatch(signInFailed(json.details));
			})
        }
	})
  }
}
