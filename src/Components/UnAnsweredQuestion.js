import React from 'react';
import {
	QuestionCardQP,
	QuestionAvatarQP,
	QuestionInfoQP,
	QuestionInfoHeaderQP,
	QuestionInfoOptionsQP,
} from './Styles/QuestionPage.styled';
import { GlobalImage } from './Styles/GlobalStyle.styled';
import { formatDate } from '../Utils/_DATA';

const UnAnsweredQuestion = ({ UID, id, QID, children }) => {
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
				<QuestionInfoOptionsQP>{children}</QuestionInfoOptionsQP>
			</QuestionInfoQP>
		</QuestionCardQP>
	);
};

export default UnAnsweredQuestion;
