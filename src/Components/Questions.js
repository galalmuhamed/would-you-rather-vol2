import React, { useState } from 'react';
import QuestionsNav from './QuestionsNav';
import FilterUnAnsweredQuestions from './FilterUnAnsweredQuestions';
import FilterAnsweredQuestions from './FilterAnsweredQuestions';
const Questions = () => {
	const [selectNav, setSelectNav] = useState('Unanswered Questions');
	return (
		<>
			<QuestionsNav selectNav={selectNav} setSelectNav={setSelectNav} />
			{selectNav === 'Unanswered Questions' ? (
				<FilterUnAnsweredQuestions selectNav={selectNav} />
			) : (
				<FilterAnsweredQuestions />
			)}
		</>
	);
};

export default Questions;
