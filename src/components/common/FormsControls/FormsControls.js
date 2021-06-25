import React from "react";
import style from "./FormsControls.module.css";
import { Field } from "redux-form";

const FormControl = ({ input, meta: { touched, error }, children }) => {
	let showError = touched && error;

	return (
		<div>
			<div className={showError ? style.showErrorBorder : undefined}>{children}</div>

			{showError ? <span className={style.showErrorBlock}>{error}</span> : ""}
		</div>
	);
};

export const Textarea = props => {
	const { input, child, meta, ...restProps } = props;
	return (
		<FormControl {...props}>
			<textarea {...input} {...restProps} />
		</FormControl>
	);
};

export const Input = props => {
	const { input, child, meta, ...restProps } = props;

	return (
		<FormControl {...props}>
			<input {...input} {...restProps} />
		</FormControl>
	);
};

export const wrapperCreateField = (name, validate = [], type, placeholder = "", component, text = "") => {
	return (
		<div className={style.classN}>
			<Field name={name} validate={validate} type={type} placeholder={placeholder} component={component} /> {text}
		</div>
	);
};
