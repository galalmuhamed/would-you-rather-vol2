import React from 'react';
import { SearchBarContainer } from './Styles/Leaderboard.styled';
import { MdSearch } from 'react-icons/md';

const SearchBar = ({ value, onChange, placeholder }) => {
	return (
		<SearchBarContainer>
			<MdSearch className="icon" />
			<input placeholder={placeholder} value={value} onChange={onChange} />
		</SearchBarContainer>
	);
};

export default SearchBar;
