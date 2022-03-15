import {
	RECEIVE_QUESTIONS,
	ADD_QUESTIONS,
	ADD_ANSWERS,
	DELETE_QUESTION,
} from './ActionTypes';
import { _saveQuestion, _saveQuestionAnswer } from '../../Utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

export const getQuestions = questions => {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	};
};

const addQuestion = question => {
	return {
		type: ADD_QUESTIONS,
		question,
	};
};
export const handleAddQuestion = (optionOneText, optionTwoText) => {
	return (dispatch, getState) => {
		dispatch(showLoading());
		const { AuthedUser } = getState();
		return _saveQuestion({
			optionOneText,
			optionTwoText,
			author: AuthedUser,
		})
			.then(question => {
				dispatch(addQuestion(question));
			})
			.then(() => {
				dispatch(hideLoading());
			});
	};
};

const saveQuestionAnswer = ({ authedUser, qid, answer }) => {
	return {
		type: ADD_ANSWERS,
		qid,
		authedUser,
		answer,
	};
};
export const handleSaveQuestionAnswer = info => {
	return dispatch => {
		dispatch(saveQuestionAnswer(info));
		return _saveQuestionAnswer(info).catch(() => {
			alert('something went wrong please try again');
			dispatch(saveQuestionAnswer(info));
		});
	};
};

export const deleteQuestion = (qid, authedUser) => {
	return {
		type: DELETE_QUESTION,
		qid,
		authedUser,
	};
};
