import React, { useState } from 'react';
import {
	Form,
	Button,
	TextAreaContainer,
	EmojiPicker,
} from './Styles/NewQuestion.styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAddQuestion } from '../Redux/Actions/Questions';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import Picker from 'emoji-picker-react';

const New = () => {
	const [optionOne, setOptionOne] = useState('');
	const [optionTwo, setOptionTwo] = useState('');
	const [showPickerOne, setShowPickerOne] = useState(false);
	const [showPickerTwo, setShowPickerTwo] = useState(false);
	const maxLengthOne = 150 - optionOne.length;
	const maxLengthTwo = 150 - optionTwo.length;
	const dispatch = useDispatch();
	const navigate = useNavigate('');

	const addNewQuestion = e => {
		e.preventDefault();
		dispatch(handleAddQuestion(optionOne, optionTwo));
		navigate('/');
	};

	const onEmojiClickOne = (event, emojiObject) => {
		setOptionOne(prevState => prevState + emojiObject.emoji);
		setShowPickerOne(false);
	};
	const onEmojiClickTwo = (event, emojiObject) => {
		setOptionTwo(prevState => prevState + emojiObject.emoji);
		setShowPickerTwo(false);
	};

	const onChangeOne = () => {
		if (showPickerOne === false && showPickerTwo === false) {
			setShowPickerOne(true);
		} else if (showPickerOne === true && showPickerTwo === false) {
			setShowPickerOne(false);
		} else if (showPickerOne === false && showPickerTwo === true) {
			setShowPickerOne(true);
			setShowPickerTwo(false);
		}
	};
	const onChangeTwo = () => {
		if (showPickerTwo === false && showPickerOne === false) {
			setShowPickerTwo(true);
		} else if (showPickerOne === false && showPickerTwo === true) {
			setShowPickerTwo(false);
		} else if (showPickerOne === true && showPickerTwo === false) {
			setShowPickerTwo(true);
			setShowPickerOne(false);
		}
	};

	return (
		<Form onSubmit={addNewQuestion}>
			<h2>Would You Rather ?</h2>
			<TextAreaContainer>
				<textarea
					typeof="text"
					placeholder="Option One"
					value={optionOne}
					onChange={e => setOptionOne(e.target.value)}
					maxLength={150}
				/>
				{maxLengthOne <= 75 && (
					<div className={maxLengthOne <= 10 ? 'red' : ''}> {maxLengthOne}</div>
				)}
				<EmojiPicker>
					<BsFillEmojiSmileFill className="pickerIcon" onClick={onChangeOne} />
				</EmojiPicker>
			</TextAreaContainer>
			{showPickerOne && (
				<Picker
					pickerStyle={{ width: '80%', height: '200px', marginTop: '-15px' }}
					onEmojiClick={onEmojiClickOne}
				/>
			)}
			<TextAreaContainer>
				<textarea
					typeof="text"
					placeholder="Option Two"
					value={optionTwo}
					onChange={e => setOptionTwo(e.target.value)}
					maxLength={150}
				/>
				{maxLengthTwo <= 100 && (
					<div className={maxLengthTwo <= 10 ? 'red' : ''}> {maxLengthTwo}</div>
				)}
				<EmojiPicker>
					<BsFillEmojiSmileFill className="pickerIcon" onClick={onChangeTwo} />
				</EmojiPicker>
			</TextAreaContainer>
			{showPickerTwo && (
				<Picker
					pickerStyle={{ width: '80%', height: '200px', marginTop: '-15px' }}
					onEmojiClick={onEmojiClickTwo}
				/>
			)}
			<Button type="submit" disabled={optionOne === '' || optionTwo === ''}>
				Add
			</Button>
		</Form>
	);
};

export default New;

/*

	<EmojiPicker>
					<BsFillEmojiSmileFill
						className="pickerIcon"
						onClick={() => setShowPickerOne(!showPickerOne)}
					/>
					{showPickerOne && (
						<Picker pickerStyle={{}} onEmojiClick={onEmojiClickOne} />
					)}
				</EmojiPicker>

		<Form onSubmit={addNewQuestion}>
			<h2> Would You Rather ?</h2>
			<TextAreaContainer>
				<textarea
					typeof="text"
					placeholder="Option One"
					value={optionOne}
					onChange={e => setOptionOne(e.target.value)}
					maxLength={150}
				/>
				{maxLengthOne <= 75 && (
					<div className={maxLengthOne <= 10 ? 'red' : ''}> {maxLengthOne}</div>
				)}
				<EmojiPicker>
					<BsFillEmojiSmileFill
						className="pickerIcon"
						onClick={() => setShowPickerOne(!showPickerOne)}
					/>
					{showPickerOne && (
						<Picker pickerStyle={{}} onEmojiClick={onEmojiClickOne} />
					)}
				</EmojiPicker>
			</TextAreaContainer>
			<TextAreaContainer>
				<textarea
					typeof="text"
					placeholder="Option Two"
					value={optionTwo}
					onChange={e => setOptionTwo(e.target.value)}
					maxLength={150}
				/>
				{maxLengthTwo <= 100 && (
					<div className={maxLengthTwo <= 10 ? 'red' : ''}> {maxLengthTwo}</div>
				)}
				<EmojiPicker>
					<BsFillEmojiSmileFill
						className="pickerIcon"
						onClick={() => setShowPickerTwo(!showPickerTwo)}
					/>
					{showPickerTwo && (
						<Picker pickerStyle={{}} onEmojiClick={onEmojiClickTwo} />
					)}
				</EmojiPicker>
			</TextAreaContainer>
			<Button type="submit" disabled={optionOne === '' || optionTwo === ''}>
				Add
			</Button>
		</Form>

*/
