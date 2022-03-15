import styled from 'styled-components';
import { GlobalContainer } from './GlobalStyle.styled';

export const NotFoundContainer = styled(GlobalContainer)`
	${GlobalContainer}
`;
export const ErrorCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-size: 40px;

	& :nth-child(1) {
		color: red;
	}
	& :nth-child(2) {
		font-weight: bold;
	}
`;
