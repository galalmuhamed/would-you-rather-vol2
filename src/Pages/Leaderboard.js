import React from 'react';
import { LeaderboardContainer } from '../Components/Styles/Leaderboard.styled';
import { useSelector } from 'react-redux';
import LeaderboardScore from '../Components/LeaderboardScore';
import LeaderboardSearch from '../Components/LeaderboardSearch';

const Leaderboard = () => {
	const Users = useSelector(state => state.Users);

	const UID = Object.keys(Users);
	const score = UID.map(id => ({
		id: id,
		firstName: Users[id].firstName,
		lastName: Users[id].lastName,
		avatarURL: Users[id].avatarURL,
		questions: Users[id].questions.length,
		answers: Object.keys(Users[id].answers).length,
		points:
			Object.keys(Users[id].answers).length +
			Object.keys(Users[id].questions).length,
	}));
	const positions = score.map(user => user.points);
	const sortPositions = positions.sort((a, b) => b - a).slice(0, 3);
	const gold = sortPositions[0];
	const silver = sortPositions[1];
	const bronze = sortPositions[2];

	return (
		<LeaderboardContainer>
			<LeaderboardScore
				score={score}
				gold={gold}
				silver={silver}
				bronze={bronze}
			/>
			<LeaderboardSearch score={score} />
		</LeaderboardContainer>
	);
};

export default Leaderboard;
