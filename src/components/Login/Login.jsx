import React from "react";
import style from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { Redirect } from "react-router";
import styles from "../common/FormsControls/FormsControls.module.css";

let maxLength50 = maxLengthCreator(50);

const LoginForm = props => {
	return (
		<form onSubmit={props.handleSubmit} className={style.form}>
			<div>
				<Field name='email' validate={[required, maxLength50]} type='email' placeholder='Email' component={Input} />
			</div>
			<div>
				<Field name='password' validate={[required, maxLength50]} type='password' placeholder='Password' component={Input} />
			</div>
			<div className={style.checkbox}>
				<Field name='rememberMe' type='checkbox' component={Input} />
			</div>
			{props.error && <div className={styles.formCommonOfError}>{props.error}</div>}
			<div>
				<button>Sign In</button>
			</div>
		</form>
	);
};

const LoginReduxForm = reduxForm({
	form: "login",
})(LoginForm);

const Login = props => {
	const onSubmit = formData => {
		console.log(formData);
		props.login(formData.email, formData.password, formData.rememberMe);
	};

	if (props.isAuth) {
		return <Redirect to='/profile' />;
	}

	return (
		<div className={style.login_container}>
			<h1>Login</h1>

			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

export default Login;
