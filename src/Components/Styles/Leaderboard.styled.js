import styled from 'styled-components';
import { GlobalContainer, GlobalImage } from './GlobalStyle.styled';
import {
	OLContainer,
	QuestionCard,
	QuestionAvatar,
} from './DashboardContainer.styled';

export const LeaderboardContainer = styled(GlobalContainer)`
	${GlobalContainer}
`;
export const OLContainerLb = styled(OLContainer)`
	${OLContainer}
`;

export const QuestionCardLb = styled(QuestionCard)`
	position: relative;
	${QuestionCard}
`;
export const AvatarLb = styled(QuestionAvatar)`
	flex: 0.3;
	${QuestionAvatar}
`;
export const ImageLb = styled(GlobalImage)`
	@media only screen and (max-width: 750px) {
		width: 50px;
	}
`;
export const InfoLb = styled.div`
	flex: 0.4;
	text-transform: capitalize;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	& > h3 {
		font-family: 'Mochiy Pop One', sans-serif;
	}

	@media only screen and (max-width: 750px) {
		& > h3 {
			font-size: 15px;
		}
		& > h5 {
			font-size: 9px;
		}
	}
`;
export const PlayersScore = styled.div`
	flex: 0.3;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	& > h3 {
		background-image: ${props => props.theme.backgroundBoxesColor};
		padding: 10px;

		border-radius: 20px;
		font-family: 'Mochiy Pop One', sans-serif;
		font-weight: bold;
		font-size: 15px;
	}
	& > .LeaderIcon {
		font-size: 30px;
		position: absolute;
		top: 0;
		right: 0;
	}
	& > .gold {
		color: gold;
	}
	& > .silver {
		color: lightgray;
	}
	& > .bronze {
		color: #cd7f32;
	}
	@media only screen and (max-width: 750px) {
		& > h3 {
			padding: 10px;
			font-size: 12px;
		}
	}
`;
/// search LeaderBoard SLB
export const SearchContainerSLB = styled.div`
	display: flex;
	margin: 10px auto;
	width: 80%;
	border-radius: 10px;
	padding: 5px 5px;
	background-image: ${props => props.theme.backgroundBoxesColor};
	margin-top: 40px;
	flex-direction: column;
	align-items: center;
	height: 220px;
	text-align: center;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
	& {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	& > h3 {
		padding: 5px;
	}

	@media only screen and (max-width: 750px) {
		width: 100%;
		height: 280px;

		& > h3 {
			font-size: 14px;
		}
	}
`;

export const SearchBarContainer = styled.div`
	width: 80%;
	background-color: ${props => props.theme.hoverColor};
	display: flex;
	align-items: center;
	padding: 5px 10px;
	border: 2px solid black;
	border-radius: 20px;
	margin-bottom: 5px;
	& > .icon {
		font-size: 20px;
		color: gray;
	}
	& > input {
		width: 100%;
		outline: none;
		border: none;
		margin-left: 5px;
		background-color: ${props => props.theme.hoverColor};
	}
`;
export const OLContainerSLB = styled(OLContainerLb)`
	width: 100%;
`;
export const QuestionCardSLB = styled(QuestionCardLb)`
	margin: 0;
	margin-bottom: 5px;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	padding: 5px 20px;
	background-image: none;
	background-color: ${props => props.theme.hoverColor};
	& > h4 {
		font-family: 'Mochiy Pop One', sans-serif;
		text-transform: capitalize;
	}
	& > h3 {
		font-size: 14px;
		padding: 5px 10px;
		background-image: ${props => props.theme.backgroundBoxesColor};
		border-radius: 20px;
	}
	@media only screen and (max-width: 750px) {
		& > h4 {
			font-size: 12px;
		}
		& > h3 {
			font-size: 12px;
			padding: 3px5px;
		}
	}
`;
export const ImageSLB = styled(GlobalImage)`
	width: 50px;
`;
