import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	ProfilePageContainer,
	UserCard,
	UserInfoOne,
	UserInfoTwo,
	Setting,
	UnAnsweredQuestionInfo,
	DeleteBtn,
	LinksBtn,
} from '../Components/Styles/ProfilePage.styled';
import { NoAnswers } from '../Components/Styles/DashboardContainer.styled';
import { GlobalImage } from '../Components/Styles/GlobalStyle.styled';
import UserInfoOptions from '../Components/UserInfoOptions';
import QuestionsNav from '../Components/QuestionsNav';
import UnAnsweredQuestion from '../Components/UnAnsweredQuestion';
import AnsweredQuestion from '../Components/AnsweredQuestion';
import { useSelector, useDispatch } from 'react-redux';
import { MdLocationPin, MdOutlineWork, MdPhone, MdEmail } from 'react-icons/md';
import { FaUniversity } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import { deleteQuestion } from '../Redux/Actions/Questions';
import { Navigate } from 'react-router-dom';
import FormSetting from '../Components/FormSetting';

const ProfilePage = () => {
	// states
	const Users = useSelector(state => state.Users);
	const authedUser = useSelector(state => state.AuthedUser);
	const Questions = useSelector(state => state.Questions);
	const [isOpen, setIsOpen] = useState(false);
	const [selectNav, setSelectNav] = useState('Unanswered Questions');

	//data
	const { userId } = useParams();
	const dispatch = useDispatch();

	const user = Users[userId];
	const userQuestions = user ? user.questions : null;
	const userAnswers = user ? Object.keys(user.answers) : null;
	const notFound = !Users[userId];

	const sortedUserQuestion = user
		? userQuestions.sort(
				(a, b) => Questions[b].timestamp - Questions[a].timestamp
		  )
		: null;

	const sortedUserAnswers = user
		? userAnswers.sort(
				(a, b) => Questions[b].timestamp - Questions[a].timestamp
		  )
		: null;

	/// state update user info
	const [firstName, setFirstName] = useState(notFound ? '' : user.firstName);
	const [lastName, setLastName] = useState(notFound ? '' : user.lastName);
	const [from, setFrom] = useState(notFound ? '' : user.from ? user.from : '');
	const [phone, setPhone] = useState(
		notFound ? '' : user.phone ? user.phone : ''
	);
	const [work, setWork] = useState(notFound ? '' : user.work ? user.work : '');
	const [education, setEducation] = useState(
		notFound ? '' : user.education ? user.education : ''
	);
	const [age, setAge] = useState(notFound ? '' : user.age ? user.age : '');

	// functions
	const handleRemoveQuestion = id => {
		dispatch(deleteQuestion(id, authedUser));
	};
	if (notFound) {
		return <Navigate to="/notfound" />;
	}
	return (
		<ProfilePageContainer>
			<UserCard>
				<UserInfoOne>
					<GlobalImage
						src={user.avatarURL}
						alt={`${user.firstName} ${user.lastName}`}
					/>
					<p>{`${user.firstName} ${user.lastName}`}</p>
					<UserInfoOptions Icon={MdEmail} text={user.email} />
				</UserInfoOne>
				<UserInfoTwo>
					{user.id === authedUser &&
						!user.from &&
						!user.phone &&
						!user.education &&
						!user.work &&
						!user.age && (
							<UserInfoOptions
								text={`Complete Your Profile Click On Icon Setting`}
								className="nodata"
							/>
						)}
					{user.id !== authedUser &&
						!user.from &&
						!user.phone &&
						!user.education &&
						!user.work &&
						!user.age && (
							<UserInfoOptions
								text={`${user.firstName} Not Added Any information`}
								className="nodata"
							/>
						)}
					{user.age && (
						<UserInfoOptions Icon={BsPeopleFill} text={`Age: ${user.age}`} />
					)}
					{user.from && (
						<UserInfoOptions Icon={MdLocationPin} text={`From: ${user.from}`} />
					)}
					{user.phone && (
						<UserInfoOptions Icon={MdPhone} text={`Phone: ${user.phone}`} />
					)}
					{user.education && (
						<UserInfoOptions
							Icon={FaUniversity}
							text={`Education: ${user.education}`}
						/>
					)}
					{user.work && (
						<UserInfoOptions Icon={MdOutlineWork} text={`Work: ${user.work}`} />
					)}
				</UserInfoTwo>
				{!isOpen && authedUser === user.id && (
					<Setting onClick={() => setIsOpen(true)}>
						<AiFillSetting className="settingIcon" />
					</Setting>
				)}
			</UserCard>
			{isOpen && (
				<FormSetting
					user={user}
					authedUser={authedUser}
					setIsOpen={setIsOpen}
					firstName={firstName}
					setFirstName={setFirstName}
					lastName={lastName}
					setLastName={setLastName}
					from={from}
					setFrom={setFrom}
					phone={phone}
					setPhone={setPhone}
					work={work}
					setWork={setWork}
					education={education}
					setEducation={setEducation}
					age={age}
					setAge={setAge}
				/>
			)}
			<QuestionsNav
				selectNav={selectNav}
				setSelectNav={setSelectNav}
				left="Questions Created"
				right="Answered Questions"
			/>
			{selectNav === 'Unanswered Questions' ? (
				userQuestions.length > 0 ? (
					sortedUserQuestion.map(id => (
						<UnAnsweredQuestion key={id} QID={Questions[id]} id={id} UID={user}>
							<UnAnsweredQuestionInfo>
								<h4>would you rather ?</h4>
								<p>{Questions[id].optionOne.text}</p>
								<p>{Questions[id].optionTwo.text}</p>
							</UnAnsweredQuestionInfo>
							{authedUser === user.id ? (
								<DeleteBtn
									onClick={() => handleRemoveQuestion(Questions[id].id)}
								>
									Delete
								</DeleteBtn>
							) : (
								<LinksBtn to={`/question/${Questions[id].id}`}>
									View Poll
								</LinksBtn>
							)}
						</UnAnsweredQuestion>
					))
				) : (
					<NoAnswers>{`You Didn't Create any Question or Removed All Questions`}</NoAnswers>
				)
			) : userAnswers.length > 0 ? (
				sortedUserAnswers.map(id => (
					<AnsweredQuestion
						key={id}
						UID={Users[Questions[id].author]}
						QID={Questions[id]}
						answerID={id}
					/>
				))
			) : (
				<NoAnswers>{`You Didn't Answer any Question`}</NoAnswers>
			)}
		</ProfilePageContainer>
	);
};

export default ProfilePage;
