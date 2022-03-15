import React from 'react';
import { MdOutlineLogout, MdLightMode, MdDarkMode } from 'react-icons/md';
import { SideButtons, Button } from './Styles/SideBar.styled';
import { useDispatch } from 'react-redux';
import { handleDarkMode } from '../Redux/Actions/Users';
import { logOut } from '../Redux/Actions/AuthedUser';

const SideBarButtons = props => {
	const { user } = props;
	const dispatch = useDispatch();

	const ToggleDarkMode = e => {
		e.preventDefault();
		dispatch(handleDarkMode(user.id));
	};

	const LoggedOut = e => {
		e.preventDefault();
		dispatch(logOut());
	};
	return (
		<SideButtons>
			{user.darkMode ? (
				<Button onClick={ToggleDarkMode}>
					<MdLightMode className="icon sun" />
					<h3>Light Mode</h3>
				</Button>
			) : (
				<Button onClick={ToggleDarkMode}>
					<MdDarkMode className="icon moon" />
					<h3>Dark Mode</h3>
				</Button>
			)}

			<Button onClick={LoggedOut}>
				<MdOutlineLogout className="icon" />
				<h3>Log Out</h3>
			</Button>
		</SideButtons>
	);
};

export default SideBarButtons;
