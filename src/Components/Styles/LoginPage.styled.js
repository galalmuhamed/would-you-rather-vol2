import styled from 'styled-components';

export const LoginPageContainer = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const LoginBox = styled.div`
	padding: 10px;
	border-radius: 20px;
	background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
	width: 80%;
	min-height: 80%;
	display: flex;
	@media only screen and (max-width: 750px) {
		& {
			flex-direction: column;
		}
	}
`;
export const FlexBox = styled.div`
	flex: 0.5;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	line-height: 1.5;

	& > .logoIcon {
		color: black;
		font-size: 40px;
	}
	& > h1 {
		font-family: 'Mochiy Pop One', sans-serif;
	}
	@media only screen and (max-width: 750px) {
		& > h1 {
			font-size: 25px;
		}
	}
`;
export const ToggleSignUp = styled.div`
	font-size: 12px;
	margin-top: 5px;
	background-color: white;
	padding: 5px 10px;
	border-radius: 20px;
	& > button {
		background: transparent;
		cursor: pointer;
		outline: none;
		border: none;
		color: grey;
		font-weight: bold;
		background-color: white;
		padding: 0 5px;
		border-bottom: 2px solid white;

		&:hover {
			border-color: aqua;
			color: black;
		}
	}
`;
//signUp component

export const FlexBoxTwo = styled(FlexBox)`
	background-color: white;
	justify-content: space-evenly;
	margin: auto;
	padding: 20px;
	border-radius: 20px;
	@media only screen and (max-width: 750px) {
		& {
			width: 100%;
			margin-top: 5px;
		}
	}
`;

export const SignUpHeader = styled.div`
	font-weight: bold;
	letter-spacing: 3px;
	background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
	padding: 5px 10px;
	border-radius: 10px;
	font-family: 'Mochiy Pop One', sans-serif;
`;
export const SignUpForm = styled.form`
	width: 100%;
`;
export const GroupForm = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	& > label {
		width: 120px;
		display: inline-block;
		font-weight: bold;
		font-size: 15px;
		text-align: left;
	}
	& > input {
		width: 100%;
		border: none;
		padding: 10px;
		border-bottom: 1px solid black;
		outline: none;
	}

	& > .weak,
	& > .meduim,
	& > .strong {
		border-width: 3px;
	}

	& > .weak {
		border-color: red;
	}
	& > .meduim {
		border-color: yellow;
	}
	& > .strong {
		border-color: green;
	}
	@media only screen and (max-width: 750px) {
		& {
			display: block;
		}
		& > input {
			padding: 5px 10px;
		}
		& > label {
			width: 100%;
		}
	}
`;
export const AvatarContainer = styled(GroupForm)`
	${GroupForm}
`;
export const Avatars = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	& > img {
		border-radius: 50%;
		width: 40px;
		margin: 5px;
		cursor: pointer;
		opacity: 0.5;
		transition: 0.5s;
	}
	& > img:hover {
		opacity: 1;
	}
	& > #selected {
		opacity: 1;
	}
`;
export const Error = styled.div`
	background-color: red;
	margin-top: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	padding: 3px 10px;
	& :nth-child(1) {
		font-size: 20px;
	}
	& > div {
		font-weight: bold;
		margin-left: 5px;
		font-size: 12px;
	}
`;
export const Button = styled.button`
	margin-top: 5px;
	width: 50%;
	padding: 5px;
	border: none;
	cursor: pointer;
	background-color: transparent;
	border: 2px solid black;
	border-radius: 10px;
	font-weight: bold;
	color: grey;
	transition: 0.5s;
	&:hover {
		color: black;
		border-color: aqua;
		background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
	}
`;
