import fetch from 'cross-fetch'

import * as constants from './constants';

export const login = (login, pass) => {
  return dispatch => {
    //return fetch('http://localhost:8000/api/v1/user/signin/$(login)/$(pass)/')
    return fetch('http://localhost:8000')
      //.then(response => response.json())
      //.then(json => dispatch(signIn())))
      .then(dispatch(signedIn('ololo')))
  }
}

export const signIn = (login, pass) => ({
	type: constants.SIGN_IN,
	login: login,
	pass: pass
})

export const signedIn = (token) => ({
    type: constants.SIGNED_IN,
    token
})

export const signOut = () => ({
    type: constants.SIGN_OUT
})
