import React from 'react';
import {
	OLContainerLb,
	QuestionCardLb,
	AvatarLb,
	ImageLb,
	InfoLb,
	PlayersScore,
} from './Styles/Leaderboard.styled';

import { FaMedal } from 'react-icons/fa';

const LeaderboardScore = ({ score, gold, silver, bronze }) => {
	return (
		<OLContainerLb>
			{score
				.sort((a, b) => b.points - a.points)
				.slice(0, 3)
				.map(user => (
					<QuestionCardLb key={user.id}>
						<AvatarLb>
							<ImageLb
								src={user.avatarURL}
								alt={`${user.firstName} ${user.lastName}`}
							/>
						</AvatarLb>
						<InfoLb>
							<h3>{`${user.firstName} ${user.lastName}`}</h3>
							<h5>{`Created: ${user.questions}`}</h5>
							<h5>{`Answered: ${user.answers}`}</h5>
						</InfoLb>
						<PlayersScore>
							<FaMedal
								className={
									user.points === gold
										? 'gold LeaderIcon'
										: 'LeaderIcon' && user.points === silver
										? 'silver LeaderIcon'
										: 'LeaderIcon' && user.points === bronze
										? 'bronze LeaderIcon'
										: 'LeaderIcon'
								}
							/>

							<h3>{`Score: ${user.points}`}</h3>
						</PlayersScore>
					</QuestionCardLb>
				))}
		</OLContainerLb>
	);
};

export default LeaderboardScore;

/*
<QuestionCardLb>
            <AvatarLb>
            <GlobalImage src="" alt =""/>
            </AvatarLb>
            </QuestionCardLb>
*/
