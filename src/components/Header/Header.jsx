import React from "react";
import Navbar from "./Navbar/Navbar";
import style from "./Header.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, reduxForm } from "redux-form";

const HeaderForm = props => {
	return (
		<form onSubmit={props.handleSubmit} className={style.form_group}>
			<FontAwesomeIcon className={style.search_icon} icon={faSearch} size='sm' />
			<Field name='inputSearch' type='search' placeholder='Search friends, photos, videos' component='input' />
		</form>
	);
};

const HeaderFormRedux = reduxForm({ form: "headerSearchForm" })(HeaderForm);

const Header = props => {
	let onSubmit = value => {
		console.log(value);
	};

	return (
		<header className={style.header}>
			<div className={style.container}>
				<div>
					<a href='/profile'>
						<img className={style.logo} src='https://themified.com/friend-finder/images/logo.png' alt='' />
					</a>
				</div>

				<HeaderFormRedux onSubmit={onSubmit} />

				<div>
					<Navbar {...props} />
				</div>
			</div>
		</header>
	);
};

export default Header;
