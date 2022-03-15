import React from 'react';
import { NavLinks } from './Styles/SideBar.styled';

const SideBarOptions = ({ text, Icon, to }) => {
	return (
		<NavLinks to={to} activeclassname="active">
			<Icon className="icon" />
			<h3>{text}</h3>
		</NavLinks>
	);
};

export default SideBarOptions;
