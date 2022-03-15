import {
	RECEIVE_USERS,
	ADD_USER,
	TOGGLE_DARK_MODE,
	UPDATE_FIRSTNAME,
	UPDATE_LASTNAME,
	ADD_FROM,
	ADD_Phone,
	ADD_WORk,
	ADD_Education,
	ADD_AGE,
	REMOVE_FROM,
	REMOVE_Phone,
	REMOVE_WORk,
	REMOVE_Education,
	REMOVE_AGE,
} from './ActionTypes';
import { _saveUser } from '../../Utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';
import { setAuthedUser } from './AuthedUser';
export const getUsers = users => {
	return {
		type: RECEIVE_USERS,
		users,
	};
};
const addUser = user => {
	return {
		type: ADD_USER,
		user,
	};
};
export const handleAddUser = (
	id,
	firstName,
	lastName,
	avatarURL,
	email,
	password
) => {
	return dispatch => {
		dispatch(showLoading());
		dispatch(addUser({ id, firstName, lastName, avatarURL, email, password }));
		dispatch(setAuthedUser(id));
		return _saveUser({
			id,
			firstName,
			lastName,
			avatarURL,
			email,
			password,
		}).then(() => {
			dispatch(hideLoading());
		});
	};
};

export const handleDarkMode = id => {
	return {
		type: TOGGLE_DARK_MODE,
		id,
	};
};

export const updateFirstName = (authedUser, firstName) => {
	return {
		type: UPDATE_FIRSTNAME,
		authedUser,
		firstName,
	};
};
export const updateLastName = (authedUser, lastName) => {
	return {
		type: UPDATE_LASTNAME,
		authedUser,
		lastName,
	};
};
export const addFrom = (authedUser, from) => {
	return {
		type: ADD_FROM,
		authedUser,
		from,
	};
};
export const addPhone = (authedUser, phone) => {
	return {
		type: ADD_Phone,
		authedUser,
		phone,
	};
};
export const addWork = (authedUser, work) => {
	return {
		type: ADD_WORk,
		authedUser,
		work,
	};
};
export const addEduc = (authedUser, education) => {
	return {
		type: ADD_Education,
		authedUser,
		education,
	};
};
export const addAge = (authedUser, age) => {
	return {
		type: ADD_AGE,
		authedUser,
		age,
	};
};
export const removeFrom = authedUser => {
	return {
		type: REMOVE_FROM,
		authedUser,
	};
};
export const removePhone = authedUser => {
	return {
		type: REMOVE_Phone,
		authedUser,
	};
};
export const removeWork = authedUser => {
	return {
		type: REMOVE_WORk,
		authedUser,
	};
};
export const removeEduc = authedUser => {
	return {
		type: REMOVE_Education,
		authedUser,
	};
};
export const removeAge = authedUser => {
	return {
		type: REMOVE_AGE,
		authedUser,
	};
};
