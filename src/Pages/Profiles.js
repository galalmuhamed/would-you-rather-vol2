import React, { useState } from 'react';
import {
	ProfilesContainer,
	ImageProfiles,
	OLContainerP,
	QuestionCardP,
	Links,
} from '../Components/Styles/Profiles.styled';
import { useSelector } from 'react-redux';
import SearchBar from '../Components/SearchBar';
import { MdArrowUpward } from 'react-icons/md';
import { NoAnswers } from '../Components/Styles/DashboardContainer.styled';

const Profiles = () => {
	const [search, setSearch] = useState('');
	const Users = useSelector(state => state.Users);

	const arrUsers = Object.values(Users);
	const filterUsers = arrUsers.filter(user =>
		(user.firstName + ' ' + user.lastName)
			.toLowerCase()
			.includes(search.toLowerCase())
	);
	return (
		<ProfilesContainer>
			<SearchBar
				placeholder="Search for player"
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			{search.trim() && search.trim().length > 0 ? (
				<OLContainerP>
					{filterUsers.map(user => (
						<QuestionCardP key={user.id}>
							<ImageProfiles
								src={user.avatarURL}
								alt={`${user.firstName} ${user.lastName}`}
							/>
							<Links
								to={`/profiles/${user.id}`}
							>{`${user.firstName} ${user.lastName}`}</Links>
						</QuestionCardP>
					))}
					{filterUsers.length === 0 && (
						<QuestionCardP>{`No result for: ${search}`}</QuestionCardP>
					)}
				</OLContainerP>
			) : (
				<NoAnswers>
					<MdArrowUpward />
					Search for Player
					<MdArrowUpward />
				</NoAnswers>
			)}
		</ProfilesContainer>
	);
};

export default Profiles;
