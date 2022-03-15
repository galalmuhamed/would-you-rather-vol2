import React from 'react';
import {
	DivInfoSetting,
	ButtonRemove,
	ADDBtn,
} from './Styles/ProfilePage.styled';
import { GrFormClose, GrFormAdd } from 'react-icons/gr';
const UserInfoSettings = ({
	Icon,
	text,
	value,
	maxLength,
	onChange,
	placeholder,
	idLabel,
	onClick,
	user,
	firstName,
	lastName,
	from,
	phone,
	education,
	work,
	age,
	onClickRemove,
}) => {
	return (
		<DivInfoSetting>
			{Icon && <Icon className="IconSetting" />}
			<label htmlFor={idLabel}>{text}</label>

			<input
				type="text"
				value={value}
				onChange={onChange}
				id={idLabel}
				maxLength={maxLength}
				placeholder={placeholder}
			/>

			{firstName && firstName !== user.firstName && (
				<ADDBtn onClick={onClick}>
					<GrFormAdd />
				</ADDBtn>
			)}
			{lastName && lastName !== user.lastName && (
				<ADDBtn onClick={onClick}>
					<GrFormAdd />
				</ADDBtn>
			)}
			{from &&
				(from === user.from ? (
					<ButtonRemove onClick={onClickRemove}>
						<GrFormClose />
					</ButtonRemove>
				) : (
					<ADDBtn onClick={onClick}>
						<GrFormAdd />
					</ADDBtn>
				))}
			{age &&
				(age === user.age ? (
					<ButtonRemove onClick={onClickRemove}>
						<GrFormClose />
					</ButtonRemove>
				) : (
					<ADDBtn onClick={onClick}>
						<GrFormAdd />
					</ADDBtn>
				))}
			{phone &&
				(phone === user.phone ? (
					<ButtonRemove onClick={onClickRemove}>
						<GrFormClose />
					</ButtonRemove>
				) : (
					<ADDBtn onClick={onClick}>
						<GrFormAdd />
					</ADDBtn>
				))}
			{education &&
				(education === user.education ? (
					<ButtonRemove onClick={onClickRemove}>
						<GrFormClose />
					</ButtonRemove>
				) : (
					<ADDBtn onClick={onClick}>
						<GrFormAdd />
					</ADDBtn>
				))}
			{work &&
				(work === user.work ? (
					<ButtonRemove onClick={onClickRemove}>
						<GrFormClose />
					</ButtonRemove>
				) : (
					<ADDBtn onClick={onClick}>
						<GrFormAdd />
					</ADDBtn>
				))}
		</DivInfoSetting>
	);
};

export default UserInfoSettings;
