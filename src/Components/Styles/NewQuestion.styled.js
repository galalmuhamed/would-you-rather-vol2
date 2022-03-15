import styled from 'styled-components';
import { GlobalContainer } from './GlobalStyle.styled';

export const NewQuestionContainer = styled(GlobalContainer)`
	${GlobalContainer}
`;

export const Form = styled.form`
	margin: 50px auto;
	background-image: ${props => props.theme.backgroundBoxesColor};
	border-radius: 20px;
	padding: 10px;
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& > h2 {
		margin-bottom: 10px;
	}

	@media only screen and (max-width: 750px) {
		width: 100%;
	}
`;

export const TextAreaContainer = styled.div`
	position: relative;
	width: 100%;
	padding: 0 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& > textarea {
		width: 100%;
		margin: 5px;
		border: none;
		border-radius: 20px;
		padding: 5px 10px;
		outline: none;
		resize: none;
		height: 100px;
		font-size: 14px;
		word-break: break-all;
	}
	& :nth-child(2) {
		width: 100%;
		padding: 0 10px;
		text-align: right;
		font-size: 18px;
		color: lightgray;
	}
	& > .red {
		color: red;
	}
	@media only screen and (max-width: 750px) {
		& > textarea {
			width: 100%;
		}
	}
`;
export const EmojiPicker = styled.div`
	width: 100%;
	text-align: right;
	padding: 0 10px;
	color: lightgray;
	cursor: pointer;
	font-size: 18px;
`;
export const Button = styled.button`
	width: 150px;
	padding: 5px 10px;
	background-color: transparent;
	border: none;
	background-color: white;
	border-radius: 20px;
	margin: 10px auto;
	font-weight: bold;
	cursor: pointer;
`;
