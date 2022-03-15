import { SET_AUTHED_USER, LOGGED_OUT } from '../Actions/ActionTypes';

const AuthedUser = (state = null, action) => {
	switch (action.type) {
		case SET_AUTHED_USER:
			return action.id;
		case LOGGED_OUT:
			return null;
		default:
			return state;
	}
};
export default AuthedUser;
