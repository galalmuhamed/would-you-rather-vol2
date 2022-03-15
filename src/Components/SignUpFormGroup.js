import React from 'react';
import { GroupForm } from './Styles/LoginPage.styled';

const SignUpFormGroup = ({
	type,
	placeholder,
	labelId,
	text,
	value,
	onChange,
	className,
	maxLength,
}) => {
	return (
		<GroupForm className="groupForm">
			<label htmlFor={labelId}>{`${text}:`}</label>
			<input
				type={type}
				placeholder={placeholder}
				id={labelId}
				value={value}
				onChange={onChange}
				className={className}
				maxLength={maxLength}
			/>
		</GroupForm>
	);
};

export default SignUpFormGroup;
