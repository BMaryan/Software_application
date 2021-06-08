import React from "react";
import style from "./FormsControls.module.css";

const FormControl = ({ input, children, meta, ...props }) => {
	let showError = meta.touched && meta.error;

	return (
		<div>
			<div className={showError ? style.showErrorBorder : undefined}>{children}</div>

			{showError ? <span className={style.showErrorBlock}>{meta.error}</span> : ""}
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
