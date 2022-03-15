import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
	QuestionCard,
	QuestionAvatar,
	QuestionInfo,
	QuestionInfoHeader,
	QuestionInfoOptions,
	Links,
} from './Styles/DashboardContainer.styled';
import { GlobalImage } from './Styles/GlobalStyle.styled';
import { formatDate } from '../Utils/_DATA';

const Question = ({ id, selectNav }) => {
	const Questions = useSelector(state => state.Questions);
	const Users = useSelector(state => state.Users);

	const Q = Questions[id];
	const author = Users[Q.author];
	if (Q === null) {
		return <Navigate to="/notfound" />;
	}

	return (
		<QuestionCard>
			<QuestionAvatar>
				<GlobalImage
					src={author.avatarURL}
					alt={`${author.firstName} ${author.lastName}`}
				/>
			</QuestionAvatar>
			<QuestionInfo>
				<QuestionInfoHeader>
					<h3>{`${author.firstName} ${author.lastName} Asks:`}</h3>
					<div>{formatDate(Q.timestamp)}</div>
				</QuestionInfoHeader>
				<QuestionInfoOptions>
					<div>
						<h4>would you rather ?</h4>
						<p>{Q.optionOne.text}</p>
						<p>{Q.optionTwo.text}</p>
					</div>
					<Links to={`/question/${id}`}>
						{selectNav === 'Unanswered Questions' ? 'View Poll' : 'Result'}
					</Links>
				</QuestionInfoOptions>
			</QuestionInfo>
		</QuestionCard>
	);
};

export default Question;
