/* eslint-disable no-unused-vars */
import React from "react";
import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "software_application/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "software_application/auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
	id: null,
	email: null,
	login: null,
	isFetching: false,
	isAuth: false,
	captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
		case GET_CAPTCHA_URL_SUCCESS: {
			return {
				...state,
				...action.data,
			};
		}
		default: {
			return state;
		}
	}
};

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });
export const getCaptchaUrlSuccess = captchaUrl => ({ type: GET_CAPTCHA_URL_SUCCESS, data: { captchaUrl } });

// thunks
export const authUser = () => async dispatch => {
	let data = await authAPI.authUser();

	if (data.resultCode === 0) {
		let { id, email, login, captcha = null } = data.data;
		dispatch(setAuthUserData(id, email, login, true, captcha));
	}
};

export const login =
	(email, password, rememberMe, captcha = null) =>
	async dispatch => {
		let data = await authAPI.login(email, password, rememberMe, captcha);

		if (data.resultCode === 0) {
			dispatch(authUser());
		} else {
			if (data.resultCode === 1) {
				dispatch(getCaptchaUrl());
			}

			let message = data.messages[0].length > 0 ? data.messages[0] : "Some error";
			dispatch(stopSubmit("login", { _error: message }));
		}
	};

export const logout = () => async dispatch => {
	let data = await authAPI.logout();

	if (data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
		dispatch(getCaptchaUrlSuccess(null));
	}
};

export const getCaptchaUrl = () => async dispatch => {
	const data = await securityAPI.getCaptchaUrl();
	const captchaUrl = data.url;

	dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
