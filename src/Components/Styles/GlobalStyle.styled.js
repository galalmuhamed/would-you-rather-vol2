import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
	font-family: 'Poppins', sans-serif;
	
}

body{
	
	background: ${props => props.theme.backgroundBody}
}
`;

export default GlobalStyle;

//global container
export const GlobalContainer = styled.div`
	min-height: 100vh;
	width: calc(100% - 300px);
	padding: 20px;
	margin: 10px 0;
	min-height: calc(100vh - 20px);
	@media only screen and (max-width: 750px) {
		width: calc(100% - 75px);
		padding: 10px 5px;
	}
`;

// global image
export const GlobalImage = styled.img`
	width: 100px;
	height: fit-content;
	border-radius: 50%;
	@media only screen and (max-width: 750px) {
		width: 75px;
	}
`;
