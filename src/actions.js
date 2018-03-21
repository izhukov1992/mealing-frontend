import { replace } from 'react-router-redux';

import { SIGN_IN, SIGN_OUT } from './constants';

export const signIn = (token) => ({
    type: SIGN_IN,
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
    .then(response => response.json())
    .then(json => {
        dispatch(signIn(json.token));
        dispatch(replace('/'));
    })
  }
}
