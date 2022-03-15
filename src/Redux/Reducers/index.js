import { combineReducers } from 'redux';
import Questions from './Questions';
import Users from './Users';
import AuthedUser from './AuthedUser';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
	AuthedUser,
	Users,
	Questions,
	loadingBar: loadingBarReducer,
});
