import React, { useState } from 'react';
import {
	SignUpHeader,
	SignUpForm,
	AvatarContainer,
	Avatars,
	Button,
	Error,
} from './Styles/LoginPage.styled';
import SignUpFormGroup from './SignUpFormGroup';
import { handleAddUser } from '../Redux/Actions/Users';
import { MdError } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignUp = props => {
	const { formatedUser } = props;
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [avatar, setAvatar] = useState('');
	const [error, setError] = useState('');
	const id = (firstName + lastName).split(' ').join('').toLowerCase();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const avatars = [
		{
			avatar: 'https://www.w3schools.com/howto/img_avatar.png',
			name: 'man',
		},
		{
			avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
			name: 'woman',
		},
		{
			avatar: 'https://www.w3schools.com/w3images/avatar2.png',
			name: 'man',
		},
		{
			avatar: 'https://www.w3schools.com/w3images/avatar6.png',
			name: 'man',
		},
	];

	const addUser = e => {
		e.preventDefault();
		if (
			firstName.trim() === '' ||
			lastName.trim() === '' ||
			password.trim() === ''
		) {
			setError('Your First/Last Name or Password Field cant be Empty');
		} else if (
			formatedUser.some(
				u => u.id === id || (u.email === email && u.password === password)
			)
		) {
			setError(
				'User with this identifier already exists. If you already have an account, Click on Sign In'
			);
		} else if (!isNaN(firstName)) {
			setError('Your First Name Can Not be start with Number');
		} else if (email === '') {
			setError('Your Email can Not Be Empty');
		} else if (avatar === '') {
			setError('Your Should Choose Avatar');
		} else {
			dispatch(handleAddUser(id, firstName, lastName, avatar, email, password));
		}
		setFirstName('');
		setLastName('');
		setAvatar('');
		setEmail('');
		setPassword('');
		//navigate('/');
	};
	return (
		<>
			<SignUpHeader>SignUp</SignUpHeader>
			<SignUpForm onSubmit={addUser}>
				<SignUpFormGroup
					type="text"
					placeholder="First Name"
					labelId="firstname"
					text="First Name"
					maxLength="10"
					value={firstName}
					onChange={e => setFirstName(e.target.value)}
				/>
				<SignUpFormGroup
					type="text"
					placeholder="Last Name"
					labelId="lasttname"
					text="Last Name"
					maxLength="10"
					value={lastName}
					onChange={e => setLastName(e.target.value)}
				/>
				<AvatarContainer className="groupForm">
					<label htmlFor="avatar">Avatar:</label>
					<Avatars className="avatarContainer">
						{avatars.map((pic, idx) => (
							<img
								key={idx}
								src={pic.avatar}
								alt={pic.name}
								className="avatar"
								onClick={e => setAvatar(e.target.src)}
								id={avatar === pic.avatar ? 'selected' : ''}
							/>
						))}
					</Avatars>
				</AvatarContainer>

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
					maxLength="8"
					value={password}
					className={
						(password.length > 0 && password.length <= 4 ? 'weak' : '') ||
						(password.length > 4 && password.length <= 6 ? 'meduim' : '') ||
						(password.length > 6 && password.length <= 8 ? 'strong' : '')
					}
					onChange={e => setPassword(e.target.value)}
				/>
				{error && (
					<Error>
						<MdError />
						<div>{error}</div>
					</Error>
				)}
				<Button type="submit">Sign Up</Button>
			</SignUpForm>
		</>
	);
};

export default SignUp;
