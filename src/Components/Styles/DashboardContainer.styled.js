import styled from 'styled-components';
import { GlobalContainer } from './GlobalStyle.styled';
import { Link } from 'react-router-dom';

export const DashboardContainer = styled(GlobalContainer)`
	${GlobalContainer}
`;
//question Nav
export const QuestionNav = styled.div`
	display: flex;
	background-color: ${props => props.theme.hoverColor};
	width: 80%;
	margin: 10px auto;
	border: 3px solid ${props => props.theme.navBarBorderColor};
	border-radius: 20px;
	& > :nth-child(1),
	& > :nth-child(2) {
		flex: 0.5;
		text-align: center;
		font-weight: bold;
		padding: 5px 0;
		border-radius: 20px;
		cursor: pointer;
		transition: 0.5s;
	}
	& > :nth-child(1).active,
	& > :nth-child(2).active {
		color: ${props => props.theme.hoverColor};
		background-image: ${props => props.theme.backgroundBoxesColor};
	}
	@media only screen and (max-width: 750px) {
		width: 100%;
		font-size: 14px;
	}
`;

//questions list
export const OLContainer = styled.ol`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
export const QuestionCard = styled.li`
	display: flex;
	list-style: none;
	margin: 10px auto;
	width: 80%;
	border-radius: 10px;
	padding: 5px 5px;
	background-image: ${props => props.theme.backgroundBoxesColor};

	@media only screen and (max-width: 750px) {
		width: 100%;
	}
`;
export const QuestionAvatar = styled.div`
	flex: 0.2;
	display: flex;
	justify-content: center;
`;

export const QuestionInfo = styled.div`
	flex: 0.8;
`;
export const QuestionInfoHeader = styled.div`
	width: 100%;
	border-bottom: 2px solid black;
	& > h3 {
		text-transform: capitalize;
	}
	& > div {
		font-size: 10px;
		color: black;
		padding: 2px 5px;
	}
`;
export const QuestionInfoOptions = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-transform: capitalize;
	margin: 5px 10px;
	& h4 {
		margin-bottom: 10px;
	}
	& p {
		margin-left: 10px;
		width: 70px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: 14px;
	}
`;
export const Links = styled(Link)`
	text-align: center;
	text-decoration: none;
	cursor: pointer;
	color: grey;
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
`;

///

export const NoAnswers = styled(QuestionCard)`
	text-align: center;
	display: flex;
	justify-content: center;
	padding: 30px;
	font-weight: bold;
	@media only screen and (max-width: 750px) {
		font-size: 12px;
	}
	${QuestionCard}
`;
