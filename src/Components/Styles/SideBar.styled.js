import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GlobalImage } from './GlobalStyle.styled';

export const SideBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
	padding: 20px 10px;
	position: sticky;
	top: 30px;
	margin: 30px 10px;
	height: calc(100vh - 60px);
	border-radius: 30px;
	background-image: ${props => props.theme.backgroundBoxesColor};
	color: ${props => props.theme.fontColor};

	@media only screen and (max-width: 750px) {
		margin: 10px 5px;
		padding: 10px 5px;
		top: 10px;
		height: calc(100vh - 20px);
		width: 75px;
	}
`;
/// userInfo
export const SideUserInfo = styled.div`
	display: flex;
	flex: 0.3;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	overflow: hidden;
	& > p {
		margin-top: 10px;
		text-transform: capitalize;
		word-break: break-all;
		text-align: center;
		overflow: hidden;
		font-weight: bold;
	}
	& > :nth-child(2) {
		font-family: 'Mochiy Pop One', sans-serif;
	}
	& > p:nth-child(3) {
		font-size: 11px;
	}
	@media only screen and (max-width: 750px) {
		& > p {
			display: none;
		}
	}
`;
export const SideImage = styled(GlobalImage)`
	@media only screen and (max-width: 750px) {
		width: 50px;
	}
	${GlobalImage}
`;
// nav
export const SideNav = styled.div`
	flex: 0.4;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 10px 0;
	@media only screen and (max-width: 750px) {
		justify-content: center;
	}
`;
export const NavLinks = styled(NavLink)`
	display: flex;
	text-decoration: none;
	width: 100%;
	padding: 10px;
	align-items: center;
	color: black;
	margin-bottom: 5px;
	font-size: 20px;
	&:hover {
		background-color: ${props => props.theme.hoverColor};
		border-radius: 20px;
	}
	&.active {
		color: red;
	}
	& > h3 {
		margin-left: 10px;
	}

	@media only screen and (max-width: 750px) {
		justify-content: center;
		padding: 5px;
		& > .icon {
			font-size: 30px;
		}
		& > h3 {
			display: none;
		}
	}
`;
// buttons
export const SideButtons = styled.div`
	display: flex;
	flex: 0.3;
	width: 100%;
	align-items: center;
	justify-content: flex-end;
	flex-direction: column;
`;
export const Button = styled.button`
	display: flex;
	width: 100%;
	padding: 5px 10px;
	align-items: center;
	color: black;
	font-size: 18px;
	background: transparent;
	border: none;
	outline: none;
	cursor: pointer;

	&:hover {
		background-color: ${props => props.theme.hoverColor};
		border-radius: 20px;
	}
	& > h3 {
		margin-left: 10px;
	}
	& > .moon {
		color: white;
	}
	&:hover > .moon {
		color: black;
	}
	& > .sun {
		color: orange;
	}
	@media only screen and (max-width: 750px) {
		justify-content: center;
		padding: 5px;
		& > .icon {
			font-size: 30px;
		}
		& > h3 {
			display: none;
		}
	}
`;
