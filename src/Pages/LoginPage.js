import React, { useState } from 'react';
import {
	LoginPageContainer,
	LoginBox,
	FlexBox,
	ToggleSignUp,
	FlexBoxTwo,
} from '../Components/Styles/LoginPage.styled';
import { IoLogoGameControllerB } from 'react-icons/io';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import { useSelector } from 'react-redux';

const LogInPage = () => {
	const Users = useSelector(state => state.Users);
	const formatedUser = Object.values(Users).map(user => ({
		id: user.id,
		email: user.email,
		password: user.password,
	}));

	const [signUp, setSignUp] = useState(true);

	return (
		<LoginPageContainer>
			<LoginBox>
				<FlexBox>
					<IoLogoGameControllerB className="logoIcon" />
					<h1>Would You Rather Game</h1>
					<ToggleSignUp>
						<span>
							{signUp
								? 'If You Already Have Account: '
								: 'If You Not Have Account: '}
						</span>
						<button onClick={() => setSignUp(!signUp)}>
							{signUp ? 'Sign In' : 'Sign Up'}
						</button>
					</ToggleSignUp>
				</FlexBox>
				<FlexBoxTwo>
					{signUp ? (
						<SignUp formatedUser={formatedUser} />
					) : (
						<SignIn formatedUser={formatedUser} />
					)}
				</FlexBoxTwo>
			</LoginBox>
		</LoginPageContainer>
	);
};

export default LogInPage;
