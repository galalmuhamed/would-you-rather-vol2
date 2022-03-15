import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './Components/Styles/GlobalStyle.styled';
import { useDispatch, useSelector } from 'react-redux';
import { handleIntialData } from './Redux/Actions/Shared';
import LoadingBar from 'react-redux-loading';
import { AppContainer } from './Components/Styles/App.styled';
import Dashboard from './Pages/Dashboard';
import SideBar from './Components/SideBar';
import NewQuestion from './Pages/NewQuestion';
import QuestionPage from './Pages/QuestionPage';
import Leaderboard from './Pages/Leaderboard';
import Profiles from './Pages/Profiles';
import ProfilePage from './Pages/ProfilePage';
import LoginPage from './Pages/LoginPage';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Components/Styles/themes.styled';
import NotFound from './Pages/NotFoundPage';

const App = props => {
	const dispatch = useDispatch();
	const AuthedUser = useSelector(state => state.AuthedUser);
	const Users = useSelector(state => state.Users);
	const darkMode = AuthedUser ? Users[AuthedUser].darkMode : null;

	useEffect(() => {
		dispatch(handleIntialData());
	}, []);

	return (
		<>
			<ThemeProvider theme={darkMode === true ? darkTheme : lightTheme}>
				<GlobalStyle />
				<LoadingBar
					style={{
						backgroundColor: darkMode ? 'darkgrey' : 'aqua',
					}}
				/>
				{AuthedUser == null ? (
					<LoginPage />
				) : (
					<AppContainer>
						<SideBar AuthedUser={AuthedUser} Users={Users} />
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/add" element={<NewQuestion />} />
							<Route path="/question/:id" element={<QuestionPage />} />
							<Route path="/leaderboard" element={<Leaderboard />} />
							<Route path="/profiles" element={<Profiles />} />
							<Route path="/profiles/:userId" element={<ProfilePage />} />
							<Route path="/notfound" element={<NotFound />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</AppContainer>
				)}
			</ThemeProvider>
		</>
	);
};

export default App;
