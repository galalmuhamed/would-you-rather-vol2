import React from 'react';
import { QuestionNav } from './Styles/DashboardContainer.styled';

const QuestionsNav = props => {
	const { selectNav, setSelectNav, left, right } = props;
	return (
		<QuestionNav>
			<div
				onClick={() => setSelectNav('Unanswered Questions')}
				className={selectNav === 'Unanswered Questions' ? 'active' : ''}
			>
				{left}
			</div>
			<div
				onClick={() => setSelectNav('Answered Question')}
				className={selectNav === 'Answered Question' ? 'active' : ''}
			>
				{right}
			</div>
		</QuestionNav>
	);
};

export default QuestionsNav;
