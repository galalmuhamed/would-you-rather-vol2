import React from 'react';
import { DivBox } from './Styles/ProfilePage.styled';

const UserInfoOptions = ({ Icon, text, className }) => {
	return (
		<DivBox>
			{Icon && <Icon />}
			<h3 className={className && className}>{text}</h3>
		</DivBox>
	);
};

export default UserInfoOptions;
