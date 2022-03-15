import React from 'react';
import { useSelector } from 'react-redux';
import { OLContainer, NoAnswers } from './Styles/DashboardContainer.styled';
import Question from './Question';

const FilterUnAnsweredQuestions = ({ selectNav }) => {
	const Questions = useSelector(state => state.Questions);
	const Users = useSelector(state => state.Users);
	const AuthedUser = useSelector(state => state.AuthedUser);

	const user = Users[AuthedUser];
	const unAnswered = Object.keys(Questions)
		.filter(id => !user.answers.hasOwnProperty(id))
		.sort((a, b) => Questions[b].timestamp - Questions[a].timestamp);

	return (
		<OLContainer>
			{unAnswered.length > 0 ? (
				unAnswered.map(id => (
					<Question key={id} id={id} selectNav={selectNav} />
				))
			) : (
				<NoAnswers>Congratulation... You Answered All Questions</NoAnswers>
			)}
		</OLContainer>
	);
};

export default FilterUnAnsweredQuestions;

/* 

const UnansweredQuestions = props => {
	const { unAnswered } = props;
	return (
		<BigOL>
			{unAnswered.length > 0 ? (
				unAnswered.map(id => (
					<LI key={id}>
						<Question id={id} questionNav={props.questionNav} />
					</LI>
				))
			) : (
				<NoAnswers>Add Questions from New Question</NoAnswers>
			)}
		</BigOL>
	);
};

const mapStateToProps = ({ Questions, Users, AuthedUser }) => {
	const user = Users[AuthedUser];
	const unAnswered = Object.keys(Questions)
		.filter(id => !user.answers.hasOwnProperty(id))
		.sort((a, b) => Questions[b].timestamp - Questions[a].timestamp);
	return {
		unAnswered,
	};
};
*/
