import React from 'react';
import {
	NotFoundContainer,
	ErrorCard,
} from '../Components/Styles/NotFound.styled';

import { AiFillNotification } from 'react-icons/ai';
const NotFound = () => {
	return (
		<NotFoundContainer>
			<ErrorCard>
				<AiFillNotification />
				<p>404</p>
			</ErrorCard>
		</NotFoundContainer>
	);
};

export default NotFound;
