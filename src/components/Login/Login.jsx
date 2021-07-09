import React from "react";
import style from "./Login.module.css";
import { reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Input, wrapperCreateField } from "../common/FormsControls/FormsControls";
import { Redirect } from "react-router";
import styles from "../common/FormsControls/FormsControls.module.css";

let maxLength50 = maxLengthCreator(50);

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
	return (
		<form onSubmit={handleSubmit} className={style.form}>
			{wrapperCreateField("email", [required, maxLength50], "email", "Email", Input)}
			{wrapperCreateField("password", [required, maxLength50], "password", "Password", Input)}
			{wrapperCreateField("rememberMe", [], "checkbox", "", Input, "remember me")}

			{captchaUrl && <img src={captchaUrl} alt='' />}
			{captchaUrl && wrapperCreateField("captcha", [required], "text", "Symbols from image", Input)}
			{error && <div className={styles.formCommonOfError}>{error}</div>}
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
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
	};

	if (props.isAuth) {
		return <Redirect to='/profile' />;
	}

	return (
		<div className={style.login_container}>
			<h1>Login</h1>

			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
		</div>
	);
};

export default Login;
