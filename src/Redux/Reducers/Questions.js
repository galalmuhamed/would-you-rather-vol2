import {
	RECEIVE_QUESTIONS,
	ADD_QUESTIONS,
	ADD_ANSWERS,
	DELETE_QUESTION,
} from '../Actions/ActionTypes';

const Questions = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions,
			};
		case ADD_QUESTIONS:
			return {
				...state,
				[action.question.id]: action.question,
			};
		case ADD_ANSWERS:
			const { qid, authedUser, answer } = action;
			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: state[qid][answer].votes.concat([authedUser]),
					},
				},
			};
		case DELETE_QUESTION:
			const newState = { ...state };
			delete newState[action.qid];
			return newState;

		default:
			return state;
	}
};
export default Questions;
