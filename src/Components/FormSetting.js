import React, { useState } from 'react';
import {
	FormSettingPage,
	CloseBtn,
	ButtonSetting,
} from './Styles/ProfilePage.styled';
import UserInfoSettings from './UserInfoSetting';
import { GrFormClose } from 'react-icons/gr';
import { MdLocationPin, MdOutlineWork, MdPhone } from 'react-icons/md';
import { FaUniversity, FaUserAlt } from 'react-icons/fa';
import { ErrorForm } from './Styles/ProfilePage.styled';
import { BsPeopleFill } from 'react-icons/bs';
import {
	updateFirstName,
	updateLastName,
	addFrom,
	addPhone,
	addWork,
	addEduc,
	addAge,
	removeFrom,
	removePhone,
	removeWork,
	removeEduc,
	removeAge,
} from '../Redux/Actions/Users';
import { useDispatch } from 'react-redux';

const FormSetting = ({
	setIsOpen,
	user,
	authedUser,
	firstName,
	setFirstName,
	lastName,
	setLastName,
	from,
	setFrom,
	phone,
	setPhone,
	work,
	setWork,
	education,
	setEducation,
	age,
	setAge,
}) => {
	const dispatch = useDispatch();

	const [error, setError] = useState('');
	const [errorAge, setErrorAge] = useState('');
	const [errorFrom, setErrorFrom] = useState('');
	const [errorPhone, setErrorPhone] = useState('');
	const [errorEduc, setErrorEduc] = useState('');
	const [errorWork, setErrorWork] = useState('');

	const handleSubmitSetting = e => {
		e.preventDefault();
		if (
			firstName !== user.firstName ||
			lastName !== user.lastName ||
			(age && user.age !== age) ||
			(from && user.from !== from) ||
			(phone && user.phone !== phone) ||
			(education && user.education !== education) ||
			(user.work && user.work !== work)
		) {
			setIsOpen(true);
			setError('To Save Changes you must click on Plus Icon First Then Submit');
		} else {
			setIsOpen(false);
		}
	};
	const handleUpdateFirstName = () => {
		if (firstName !== '') {
			dispatch(updateFirstName(authedUser, firstName.trim()));
		}
	};
	const handleUpdateLastName = () => {
		if (lastName !== '') {
			dispatch(updateLastName(authedUser, lastName.trim()));
		}
	};

	const handleAddFrom = () => {
		if (from.trim() !== '' && from.trim().length < 20) {
			dispatch(addFrom(authedUser, from.trim()));
			setErrorFrom('');
		} else if (from.trim().length >= 20) {
			setErrorFrom('at Least 20 caracter');
		}
	};

	const handleAddPhone = () => {
		if (isNaN(phone)) {
			setErrorPhone('Your phone Should be Numbers');
		} else if (phone.length < 10) {
			setErrorPhone('Your Phone Should be 11 Numbers');
		} else {
			dispatch(addPhone(authedUser, phone.trim()));
			setErrorPhone('');
		}
	};
	const handleAddEduc = () => {
		if (education.trim().length > 19) {
			setErrorEduc('at Least 20 caracter');
		} else {
			dispatch(addEduc(authedUser, education.trim()));
			setErrorEduc('');
		}
	};
	const handleAddWork = () => {
		if (work.trim() !== '') {
			dispatch(addWork(authedUser, work.trim()));
		} else if (work.trim().length >= 20) {
			setErrorWork('at Least 20 caracter');
		}
	};

	const handleAddAge = () => {
		if (isNaN(age)) {
			setErrorAge('Your Age Must be Number');
		} else {
			dispatch(addAge(authedUser, age.trim()));
			setErrorAge('');
		}
	};
	const handleRemoveFrom = () => {
		dispatch(removeFrom(authedUser));
		setFrom('');
	};
	const handleRemovePhone = () => {
		dispatch(removePhone(authedUser));
		setPhone('');
	};
	const handleRemoveWork = () => {
		dispatch(removeWork(authedUser));
		setWork('');
	};
	const handleRemoveEducation = () => {
		dispatch(removeEduc(authedUser));
		setEducation('');
	};
	const handleRemoveAge = () => {
		dispatch(removeAge(authedUser));
		setAge('');
	};
	return (
		<FormSettingPage onSubmit={handleSubmitSetting}>
			<CloseBtn onClick={() => setIsOpen(false)}>
				<GrFormClose />
			</CloseBtn>
			<UserInfoSettings
				Icon={FaUserAlt}
				text="First Name: "
				value={firstName}
				onChange={e => setFirstName(e.target.value)}
				idLabel="firstname"
				maxLength="10"
				firstName={firstName}
				user={user}
				onClick={handleUpdateFirstName}
				placeholder="First Name Is Required"
			/>
			<UserInfoSettings
				Icon={FaUserAlt}
				text="Last Name: "
				value={lastName}
				onChange={e => setLastName(e.target.value)}
				idLabel="lastname"
				maxLength="10"
				lastName={lastName}
				user={user}
				onClick={handleUpdateLastName}
				placeholder="Last Name Is Required"
			/>
			<UserInfoSettings
				Icon={BsPeopleFill}
				text="Age: "
				value={age}
				onChange={e => setAge(e.target.value)}
				idLabel="age"
				age={age}
				user={user}
				maxLength="2"
				onClick={handleAddAge}
				setAge={setAge}
				authedUser={authedUser}
				onClickRemove={handleRemoveAge}
				placeholder="Optional"
			/>
			<ErrorForm>{errorAge && errorAge}</ErrorForm>
			<UserInfoSettings
				Icon={MdLocationPin}
				text="From: "
				value={from}
				onChange={e => setFrom(e.target.value)}
				idLabel="from"
				maxLength="20"
				from={from}
				user={user}
				onClick={handleAddFrom}
				onClickRemove={handleRemoveFrom}
				placeholder="Optional"
			/>
			<ErrorForm>{errorFrom && errorFrom}</ErrorForm>
			<UserInfoSettings
				Icon={MdPhone}
				text="Number: "
				value={phone}
				onChange={e => setPhone(e.target.value)}
				idLabel="number"
				phone={phone}
				user={user}
				maxLength="11"
				onClick={handleAddPhone}
				onClickRemove={handleRemovePhone}
				placeholder="Optional"
			/>
			<ErrorForm>{errorPhone && errorPhone}</ErrorForm>
			<UserInfoSettings
				Icon={FaUniversity}
				text="Education: "
				value={education}
				onChange={e => setEducation(e.target.value)}
				idLabel="education"
				maxLength="20"
				education={education}
				user={user}
				onClick={handleAddEduc}
				onClickRemove={handleRemoveEducation}
				placeholder="Optional"
			/>
			<ErrorForm>{errorEduc && errorEduc}</ErrorForm>
			<UserInfoSettings
				Icon={MdOutlineWork}
				text="Work: "
				value={work}
				onChange={e => setWork(e.target.value)}
				idLabel="work"
				maxLength="20"
				work={work}
				user={user}
				onClick={handleAddWork}
				onClickRemove={handleRemoveWork}
				placeholder="Optional"
			/>
			<ErrorForm>{errorWork && errorWork}</ErrorForm>

			<ErrorForm>{error && error}</ErrorForm>
			<ButtonSetting type="submit">submit</ButtonSetting>
		</FormSettingPage>
	);
};

export default FormSetting;
