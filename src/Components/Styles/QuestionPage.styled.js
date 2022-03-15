import {
	OLContainer,
	QuestionCard,
	QuestionAvatar,
	QuestionInfo,
	QuestionInfoHeader,
	QuestionInfoOptions,
} from './DashboardContainer.styled';
import styled from 'styled-components';

import { GlobalContainer } from './GlobalStyle.styled';

export const QuestionPageContainer = styled(GlobalContainer)`
	${GlobalContainer}
`;

export const OLContainerQP = styled(OLContainer)`
	${OLContainer}
`;
export const QuestionCardQP = styled(QuestionCard)`
	${QuestionCard}
`;
export const QuestionAvatarQP = styled(QuestionAvatar)`
	${QuestionAvatar}
`;
export const QuestionInfoQP = styled(QuestionInfo)`
	${QuestionInfo}
`;
export const QuestionInfoHeaderQP = styled(QuestionInfoHeader)`
	${QuestionInfoHeader}
`;
export const QuestionInfoOptionsQP = styled(QuestionInfoOptions)`
	align-items: flex-end;

	& h6 {
		margin-left: 10px;
		margin-bottom: 5px;
		color: darkgray;
		padding: 3px 5px;
	}
	& .voteAvtive {
		border-radius: 20px;
		background-color: ${props => props.theme.backgroundAnswered};
		color: black;
	}
	@media only screen and (max-width: 750px) {
		flex-direction: column;
		align-items: flex-start;
	}
	${QuestionInfoOptions}
`;
export const Inputs = styled.div`
	& input {
		margin-left: 10px;
	}
	& label {
		margin-left: 5px;
		word-break: break-all;
	}
`;
export const ButtonQB = styled.button`
	text-align: center;
	cursor: pointer;
	padding: 3px 5px;
	background-color: white;
	border-radius: 20px;
	font-weight: 600;
	border: 3px solid white;
	transition: 0.5s;
	font-size: 14px;
	&:hover {
		border-color: ${props => props.theme.navBarBorderColor};
		color: black;
	}
	@media only screen and (max-width: 750px) {
		margin-top: 5px;
		width: 100%;
	}
`;

export const VoteResult = styled.div`
	& > div {
		text-align: center;
		border-radius: 20px;
		color: darkgrey;
		padding: 5px;
		margin-bottom: 3px;
		background-color: ${props => props.theme.backgroundAnswered};
		font-size: 12px;
	}
	& .optionOne,
	& .optionTwo {
		color: black;
		font-weight: bold;
	}
	@media only screen and (max-width: 750px) {
		& {
			display: flex;
			justify-content: flex-start;
			width: 100%;
		}
		& > div {
			margin-bottom: 0;
			margin-right: 5px;
			width: 100%;
		}
	}
`;
