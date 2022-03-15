import {
	RECEIVE_USERS,
	ADD_QUESTIONS,
	ADD_ANSWERS,
	TOGGLE_DARK_MODE,
	DELETE_QUESTION,
	ADD_USER,
	UPDATE_FIRSTNAME,
	UPDATE_LASTNAME,
	ADD_FROM,
	ADD_Phone,
	ADD_Education,
	ADD_WORk,
	ADD_AGE,
	REMOVE_FROM,
	REMOVE_Phone,
	REMOVE_WORk,
	REMOVE_Education,
	REMOVE_AGE,
} from '../Actions/ActionTypes';

const Users = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			};
		case ADD_QUESTIONS:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat([
						action.question.id,
					]),
				},
			};
		case ADD_ANSWERS:
			const { qid, authedUser, answer } = action;
			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[qid]: answer,
					},
				},
			};
		case DELETE_QUESTION:
			const newState = { ...state[action.authedUser].answers };
			delete newState[action.qid];
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					questions: state[action.authedUser].questions.filter(
						id => id !== action.qid
					),
					answers: newState,
				},
			};

		case ADD_USER:
			const { id, firstName, lastName, avatarURL, email, password } =
				action.user;
			return {
				...state,
				[id]: {
					id,
					firstName,
					lastName,
					avatarURL,
					email,
					password,
					darkMode: false,
					answers: {},
					questions: [],
				},
			};
		case TOGGLE_DARK_MODE:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					darkMode: !state[action.id].darkMode,
				},
			};

		case UPDATE_FIRSTNAME:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					firstName: action.firstName,
				},
			};
		case UPDATE_LASTNAME:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					lastName: action.lastName,
				},
			};
		case ADD_FROM:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					from: action.from,
				},
			};
		case ADD_Phone:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					phone: action.phone,
				},
			};
		case ADD_WORk:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					work: action.work,
				},
			};
		case ADD_Education:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					education: action.education,
				},
			};
		case ADD_AGE:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					age: action.age,
				},
			};
		case REMOVE_FROM:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					from: undefined,
				},
			};
		case REMOVE_Phone:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					phone: undefined,
				},
			};
		case REMOVE_WORk:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					work: undefined,
				},
			};
		case REMOVE_Education:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					education: undefined,
				},
			};
		case REMOVE_AGE:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					age: undefined,
				},
			};

		default:
			return state;
	}
};
export default Users;
