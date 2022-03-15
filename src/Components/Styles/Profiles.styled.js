import { GlobalContainer, GlobalImage } from './GlobalStyle.styled';
import styled from 'styled-components';
import { OLContainer, QuestionCard } from './DashboardContainer.styled';
import { Link } from 'react-router-dom';
export const ProfilesContainer = styled(GlobalContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	${GlobalContainer};
`;

export const ImageProfiles = styled(GlobalImage)`
	width: 30px;
`;

export const OLContainerP = styled(OLContainer)`
	margin-top: -5px;
	padding: 10px;
	background-color: ${props => props.theme.hoverColor};
	width: 80%;
	border-radius: 10px;
	justify-content: flex-start;
	max-height: 50%;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
	& {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	${OLContainer}
`;
export const QuestionCardP = styled(QuestionCard)`
	align-items: center;
	margin: 3px 0;
	padding: 0;
	width: 100%;
	background-image: none;
	border-bottom: 2px solid black;
	${QuestionCard};
	border-radius: 0;
`;

export const Links = styled(Link)`
	margin-left: 7px;
	text-decoration: none;
	font-family: 'Mochiy Pop One', sans-serif;
	font-size: 14px;
	font-weight: bold;
	color: gray;
	transition: 0.5s;

	&:hover {
		color: black;
		border-bottom: 1px solid black;
	}
`;
