import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleSaveQuestionAnswer } from '../Redux/Actions/Questions';
import {
	QuestionPageContainer,
	OLContainerQP,
	Inputs,
	ButtonQB,
} from '../Components/Styles/QuestionPage.styled';
import AnsweredQuestion from '../Components/AnsweredQuestion';
import UnAnsweredQuestion from '../Components/UnAnsweredQuestion';

const QuestionPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [selectAnswer, setSelectAnswer] = useState('');

	const Questions = useSelector(state => state.Questions);
	const Users = useSelector(state => state.Users);
	const authedUser = useSelector(state => state.AuthedUser);

	const QID = Questions[id];
	const UID = QID ? Users[QID.author] : null;
	const notFound = !Questions[id];
	const answeredQuestions = Users[authedUser].answers[id];

	const handleAddAnswer = e => {
		e.preventDefault();
		dispatch(
			handleSaveQuestionAnswer({
				qid: id,
				answer: selectAnswer,
				authedUser,
			})
		);
	};

	if (notFound) {
		return <Navigate to="/notfound" />;
	}

	return (
		<QuestionPageContainer>
			<OLContainerQP>
				{answeredQuestions === undefined ? (
					<UnAnsweredQuestion UID={UID} id={id} QID={QID}>
						<div>
							<h4>would you rather ?</h4>
							<Inputs>
								<input
									name="options"
									type="radio"
									id="optionOne"
									value={selectAnswer}
									onChange={e => setSelectAnswer('optionOne')}
								/>
								<label htmlFor="optionOne">{QID.optionOne.text}</label>
							</Inputs>
							<Inputs>
								<input
									name="options"
									type="radio"
									id="optionTwo"
									value={selectAnswer}
									onChange={e => setSelectAnswer('optionTwo')}
								/>
								<label htmlFor="optionTwo">{QID.optionTwo.text}</label>
							</Inputs>
						</div>
						<ButtonQB disabled={selectAnswer === ''} onClick={handleAddAnswer}>
							Submit
						</ButtonQB>
					</UnAnsweredQuestion>
				) : (
					<AnsweredQuestion UID={UID} id={id} QID={QID} />
				)}
			</OLContainerQP>
		</QuestionPageContainer>
	);
};

export default QuestionPage;
