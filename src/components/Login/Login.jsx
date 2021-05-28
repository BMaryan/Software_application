import React from "react";
import style from "./Login.module.css";

const Login = props => {
	return (
		<div className={style.login_container}>
			<h1>Login</h1>

			<LoginForm />
		</div>
	);
};

const LoginForm = props => {
	return (
		<form className={style.form}>
			<div>
				<input type='text' placeholder='Login' />
			</div>
			<div>
				<input type='password' placeholder='Password' />
			</div>
			<div>
				<input type='checkbox' />
			</div>
			<div>
				<input type='submit' placeholder='Sign In' />
			</div>
		</form>
	);
};

export default Login;
