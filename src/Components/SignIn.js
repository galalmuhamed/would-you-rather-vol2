import React, { useState } from 'react';
import {
	SignUpHeader,
	SignUpForm,
	Button,
	Error,
} from './Styles/LoginPage.styled';
import SignUpFormGroup from './SignUpFormGroup';
import { MdError } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setAuthedUser } from '../Redux/Actions/AuthedUser';

const SignIn = props => {
	const { formatedUser } = props;
	const dispatch = useDispatch();
	const [email, setEmail] = useState('tyler@test.com');
	const [password, setPassword] = useState('123');
	const [error, setError] = useState('');

	const handleSignIn = e => {
		e.preventDefault();
		formatedUser.map(user => {
			if (user.email === email && user.password === password) {
				return dispatch(setAuthedUser(user.id));
			} else if (email === '' || password === '') {
				setError("Email / Password Can't be empty");
			} else {
				setError('Email / Password Is Incorrect');
			}
		});

		setEmail('');
		setPassword('');
	};
	return (
		<>
			<SignUpHeader>SignIn</SignUpHeader>
			<SignUpForm onSubmit={handleSignIn}>
				<SignUpFormGroup
					type="email"
					placeholder="Email"
					labelId="email"
					text="Email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<SignUpFormGroup
					type="password"
					placeholder="Password"
					labelId="password"
					text="Password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				{error && (
					<Error>
						<MdError />
						<div>{error}</div>
					</Error>
				)}
				<Button type="submit">Sign In</Button>
			</SignUpForm>
		</>
	);
};

export default SignIn;
