import React from 'react';
import { useSelector } from 'react-redux';
import { OLContainer, NoAnswers } from './Styles/DashboardContainer.styled';
import Question from './Question';

const FilterAnsweredQuestions = () => {
	const Questions = useSelector(state => state.Questions);
	const Users = useSelector(state => state.Users);
	const AuthedUser = useSelector(state => state.AuthedUser);

	const user = Users[AuthedUser];
	const answered = Object.keys(Questions)
		.filter(id => user.answers.hasOwnProperty(id))
		.sort((a, b) => Questions[b].timestamp - Questions[a].timestamp);

	return (
		<OLContainer>
			{answered.length > 0 ? (
				answered.map(id => <Question key={id} id={id} />)
			) : (
				<NoAnswers>{`You Didn't Answer any Question`}</NoAnswers>
			)}
		</OLContainer>
	);
};

export default FilterAnsweredQuestions;
