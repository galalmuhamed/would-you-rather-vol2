import { _getUsers, _getQuestions } from '../../Utils/_DATA';
import { getQuestions } from './Questions';
import { getUsers } from './Users';
import { showLoading, hideLoading } from 'react-redux-loading';
//import { setAuthedUser } from './AuthedUser';

//const AuthedUser = 'tylermcginnis';

export const handleIntialData = () => {
	return dispatch => {
		dispatch(showLoading());
		return Promise.all([_getUsers(), _getQuestions()]).then(
			([users, questions]) => {
				dispatch(getUsers(users));
				dispatch(getQuestions(questions));
				//dispatch(setAuthedUser(AuthedUser));
				dispatch(hideLoading());
			}
		);
	};
};
