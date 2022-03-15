import styled from 'styled-components';
import { GlobalContainer } from './GlobalStyle.styled';
import { ButtonQB } from './QuestionPage.styled';
import { Links } from './DashboardContainer.styled';

export const ProfilePageContainer = styled(GlobalContainer)`
	position: relative;
	${GlobalContainer}
`;
export const UserCard = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	padding: 10px;
	border-radius: 20px;
	background-image: ${props => props.theme.backgroundBoxesColor};
	@media only screen and (max-width: 750px) {
		flex-direction: column;
	}
`;

export const UserInfoOne = styled.div`
	flex: 0.3;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	& > p {
		font-weight: bold;
		text-transform: capitalize;
		color: ${props => props.theme.fontColor};
	}
	& > :nth-child(3) {
		font-size: 15px;
		background: none;
		& > :nth-child(2) {
			font-size: 10px;
			color: ${props => props.theme.fontColor};
		}
	}
`;
export const UserInfoTwo = styled.div`
	flex: 0.7;
	display: flex;
	flex-direction: column;
	justify-content: Center;
`;
//user iNfo option
export const DivBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 5px;
	padding: 5px 10px;
	color: black;
	background-color: ${props => props.theme.backgroundUserDetail};
	border-radius: 20px;
	overflow: hidden;

	& > h3 {
		width: 100%;
		margin-left: 5px;
		font-size: 16px;
		text-transform: capitalize;
	}
	& .nodata {
		text-align: center;
	}
`;

//setting icon
export const Setting = styled.div`
	position: absolute;
	font-size: 20px;
	color: black;
	cursor: pointer;
	&::after {
		display: none;
		background-color: #f5f5dc75;
		content: 'Edit Your Profile';
		font-size: 10px;
		padding: 5px 10px;
		border-radius: 20px;
		position: relative;
		top: -6px;
	}
	&:hover::after {
		display: inline;
	}
`;
/// form page
export const FormSettingPage = styled.form`
	width: 80%;
	background-image: ${props => props.theme.backgroundBoxesColor};
	position: absolute;
	top: 40%;
	right: 50%;
	transform: translate(50%, -50%);
	padding: 10px;
	z-index: 10;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	@media only screen and (max-width: 750px) {
		width: 100%;
	}
`;
export const CloseBtn = styled.div`
	width: 100%;
	text-align: right;
	& :nth-child(1) {
		cursor: pointer;
		font-size: 25px;
	}
`;

export const DivInfoSetting = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 5px;
	padding: 2px 5px;
	color: black;
	border-radius: 20px;
	padding: 10px 15px;
	background-color: white;
	& .IconSetting {
		margin-right: 5px;
		font-size: 20px;
	}
	& > label {
		width: 120px;
		font-weight: bold;
	}
	& > input {
		border: none;
		background: transparent;
		outline: none;
		width: 100%;
		border-bottom: 2px solid black;
		padding: 5px;
	}
	@media only screen and (max-width: 750px) {
		width: 100%;
		& .IconSetting {
			font-size: 18px;
		}
		& > label {
			width: 100px;
			font-size: 12px;
		}
	}
`;

export const ButtonSetting = styled(ButtonQB)`
	color: grey;
	width: 200px;
	${ButtonQB}
`;
export const ButtonRemove = styled.button`
	cursor: pointer;
	background: transparent;
	border: none;
	& > :nth-child(1) {
		font-size: 20px;
	}
`;
export const ADDBtn = styled(ButtonRemove)`
	${ButtonRemove}
`;
///form page
///UnAnsweredQuestion
export const UnAnsweredQuestionInfo = styled.div`
	& > p {
		margin-left: 10px;
		width: auto;
		white-space: normal;
		text-overflow: clip;
		overflow: visible;
		font-size: 14px;
	}
`;
export const LinksBtn = styled(Links)`
	@media only screen and (max-width: 750px) {
		margin-top: 5px;
		width: 100%;
	}
	${Links}
`;
export const DeleteBtn = styled(ButtonQB)`
	color: gray;
	${ButtonQB}
`;
export const ErrorForm = styled.div`
	width: 80%;
	border-radius: 20px;
	text-align: center;
	background-color: red;
	margin-bottom: 5px;
	font-weight: bold;
`;
