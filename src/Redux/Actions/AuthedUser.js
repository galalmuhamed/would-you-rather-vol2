import { SET_AUTHED_USER, LOGGED_OUT } from './ActionTypes';

export const setAuthedUser = id => {
	return {
		type: SET_AUTHED_USER,
		id,
	};
};

export const logOut = () => {
	return {
		type: LOGGED_OUT,
	};
};
