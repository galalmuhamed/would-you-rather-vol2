import React from 'react';
import { GlobalImage } from './Styles/GlobalStyle.styled';
import { formatDate } from '../Utils/_DATA';
import { useSelector } from 'react-redux';
import {
	QuestionCardQP,
	QuestionAvatarQP,
	QuestionInfoQP,
	QuestionInfoHeaderQP,
	QuestionInfoOptionsQP,
	VoteResult,
} from './Styles/QuestionPage.styled';

const AnsweredQuestion = ({ UID, answerID, QID, id }) => {
	const Users = useSelector(state => state.Users);
	const authedUser = useSelector(state => state.AuthedUser);

	const myVote =
		Users[authedUser].answers[id] || Users[authedUser].answers[answerID];

	const optionOneAmount = QID ? QID.optionOne.votes.length : null;
	const optionTwoAmount = QID ? QID.optionTwo.votes.length : null;
	const totalVote = optionOneAmount + optionTwoAmount;

	const optionOnePercentage = QID
		? ((optionOneAmount / totalVote) * 100).toFixed(1)
		: null;
	const optionTwoPercentage = QID
		? ((optionTwoAmount / totalVote) * 100).toFixed(1)
		: null;

	return (
		<QuestionCardQP>
			<QuestionAvatarQP>
				<GlobalImage
					src={UID.avatarURL}
					alt={`${UID.firstName} ${UID.lastName}`}
				/>
			</QuestionAvatarQP>
			<QuestionInfoQP>
				<QuestionInfoHeaderQP>
					<h3>{`${UID.firstName} ${UID.lastName} Asks:`}</h3>
					<div>{formatDate(QID.timestamp)}</div>
				</QuestionInfoHeaderQP>
				<QuestionInfoOptionsQP>
					<div>
						<h4>would you rather ?</h4>
						<h6 className={myVote === 'optionOne' ? 'voteAvtive' : ''}>
							{myVote === 'optionOne' && <span>Your Vote...</span>}
							{` ${QID.optionOne.text}`}
						</h6>
						<h6 className={myVote === 'optionTwo' ? 'voteAvtive' : ''}>
							{myVote === 'optionTwo' && <span>Your Vote...</span>}
							{` ${QID.optionTwo.text}`}
						</h6>
					</div>
					<VoteResult>
						<div
							className={optionOneAmount > optionTwoAmount ? 'optionOne' : ''}
						>
							{optionOneAmount === 0
								? optionOneAmount + ' Vote '
								: optionOneAmount + ' Votes '}
							{optionOnePercentage + '%'}
						</div>
						<div
							className={optionTwoAmount > optionOneAmount ? 'optionTwo' : ''}
						>
							{optionTwoAmount === 0
								? optionTwoAmount + ' Vote '
								: optionTwoAmount + ' Votes '}
							{optionTwoPercentage + '%'}
						</div>
					</VoteResult>
				</QuestionInfoOptionsQP>
			</QuestionInfoQP>
		</QuestionCardQP>
	);
};

export default AnsweredQuestion;
