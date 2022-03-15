import React, { useState } from 'react';
import {
	SearchContainerSLB,
	OLContainerSLB,
	QuestionCardSLB,
	ImageSLB,
} from './Styles/Leaderboard.styled';
import SearchBar from './SearchBar';

const LeaderboardSearch = ({ score }) => {
	const [query, setQuery] = useState('');

	const showingUserScore =
		query === ''
			? score
			: score.filter(user =>
					(user.firstName + ' ' + user.lastName)
						.toLowerCase()
						.includes(query.toLowerCase())
			  );

	return (
		<SearchContainerSLB>
			<h3>LeaderBoard Showing Only top Three Players Know your Score Here</h3>
			<SearchBar
				placeholder="Search User Score"
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>
			<OLContainerSLB>
				{showingUserScore.map(user => (
					<QuestionCardSLB key={user.id}>
						<ImageSLB
							src={user.avatarURL}
							alt={`${user.firstName} ${user.lastName}`}
						/>
						<h4>{`${user.firstName} ${user.lastName}`}</h4>
						<h3>{`Score: ${user.points}`}</h3>
					</QuestionCardSLB>
				))}
			</OLContainerSLB>
		</SearchContainerSLB>
	);
};

export default LeaderboardSearch;
