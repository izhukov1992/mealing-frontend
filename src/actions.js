import * as constants from './constants';

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
