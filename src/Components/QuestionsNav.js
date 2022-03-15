import React from 'react';
import { QuestionNav } from './Styles/DashboardContainer.styled';

const QuestionsNav = props => {
	const { selectNav, setSelectNav } = props;
	return (
		<QuestionNav>
			<div
				onClick={() => setSelectNav('Unanswered Questions')}
				className={selectNav === 'Unanswered Questions' ? 'active' : ''}
			>
				Unanswered Questions
			</div>
			<div
				onClick={() => setSelectNav('Answered Question')}
				className={selectNav === 'Answered Question' ? 'active' : ''}
			>
				Answered Questions
			</div>
		</QuestionNav>
	);
};

export default QuestionsNav;
